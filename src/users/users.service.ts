import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { ProfileImages } from "src/profileImages/entities/profilesImages.entities";


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(ProfileImages)
    private readonly profilesImagesRepository: Repository<ProfileImages>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {

    const name_src: ProfileImages = await this.profilesImagesRepository.findOneBy({ name_src: createUserDto.name_src })

    if (!name_src) {
      throw new BadRequestException('Imagen no encontrada')
    }

    const newUser: User = this.userRepository.create({
      ...createUserDto,
      name_src: name_src
    })
    return await this.userRepository.save(newUser)
  }

  async findAll(): Promise<User[]> {
    const users: User[] = await this.userRepository.find()
    return users
  }

  async findOne(id: number): Promise<User> {
    const findById: User = await this.userRepository.findOneBy({ id });
    return findById;
  }


  async update(id: number, updateUserDto: UpdateUserDto): Promise<{ user: User; message: string }> {

    const userToUpdate: User = await this.userRepository.findOneBy({ id });
    const name_src: ProfileImages = await this.profilesImagesRepository.findOneBy({ name_src: updateUserDto.name_src })

    if (!name_src) {
      throw new BadRequestException('Imagen no encontrada')
    }

    if (!userToUpdate) {
      throw new NotFoundException('Usuario no encontrado o ya ha sido borrado');
    }

    const updateResult: UpdateResult = await this.userRepository.update(id, {
      ...updateUserDto,
      name_src: name_src
    })

    if (updateResult.affected === 1) {
      const updatedUser: User = await this.userRepository.findOneBy({ id });
      return { user: updatedUser, message: 'Usuario actualizado correctamente' };
    } else {
      throw new NotFoundException('No se pudo actualizar el usuario');
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    const userToDelete: User = await this.userRepository.findOneBy({ id });

    if (!userToDelete) {
      throw new NotFoundException('Usuario no encontrado o ya ha sido borrado');
    }

    const deleteResult: UpdateResult = await this.userRepository.softDelete({ id });

    if (deleteResult.affected === 1) {
      return { message: 'Usuario eliminado exitosamente' };
    } else {
      throw new NotFoundException('No se pudo eliminar el usuario');
    }
  }


}
