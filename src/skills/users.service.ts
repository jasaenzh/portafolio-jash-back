import { CreateSkillDto } from "./dtos/create-skill.dto";
import { UpdateSkillDto } from "./dtos/update-user.dto";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Skills } from "./entities/skill";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { ProfileImages } from "src/profileImages/entities/profilesImages.entities";


@Injectable()
export class SkillService {

  constructor(
    @InjectRepository(Skills)
    private readonly skillRepository: Repository<Skills>,

    @InjectRepository(ProfileImages)
    private readonly profilesImagesRepository: Repository<ProfileImages>
  ) { }

  async create(createSkillDto: CreateSkillDto): Promise<Skills> {

    const name_src: ProfileImages = await this.profilesImagesRepository.findOneBy({ name_src: createSkillDto.name_src })

    if (!name_src) {
      throw new BadRequestException('Imagen no encontrada')
    }

    const newUser: Skills = this.skillRepository.create({
      ...createSkillDto,
      name_src: name_src
    })
    return await this.skillRepository.save(newUser)
  }

  async findAll(): Promise<Skills[]> {
    const skills: Skills[] = await this.skillRepository.find()
    return skills
  }

  async findOne(id: number): Promise<Skills> {
    const findById: Skills = await this.skillRepository.findOneBy({ id });
    return findById;
  }


  async update(id: number, updateSkillDto: UpdateSkillDto): Promise<{ user: Skills; message: string }> {

    const userToUpdate: Skills = await this.skillRepository.findOneBy({ id });
    const name_src: ProfileImages = await this.profilesImagesRepository.findOneBy({ name_src: updateSkillDto.name_src })

    if (!name_src) {
      throw new BadRequestException('Imagen no encontrada')
    }

    if (!userToUpdate) {
      throw new NotFoundException('Habilidad no encontrada o ya ha sido borrada');
    }

    const updateResult: UpdateResult = await this.skillRepository.update(id, {
      ...updateSkillDto,
      name_src: name_src
    })

    if (updateResult.affected === 1) {
      const updatedSkill: Skills = await this.skillRepository.findOneBy({ id });
      return { user: updatedSkill, message: 'Habilidad actualizada correctamente' };
    } else {
      throw new NotFoundException('No se pudo actualizar la habilidad');
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    const skillToDelete: Skills = await this.skillRepository.findOneBy({ id });

    if (!skillToDelete) {
      throw new NotFoundException('Habilidad no encontrada o ya ha sido borrada');
    }

    const deleteResult: UpdateResult = await this.skillRepository.softDelete({ id });

    if (deleteResult.affected === 1) {
      return { message: 'Habilidad eliminada exitosamente' };
    } else {
      throw new NotFoundException('No se pudo eliminar la habilidad');
    }
  }


}
