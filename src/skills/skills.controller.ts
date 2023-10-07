import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { SkillService } from "./skills.service";
import { CreateSkillDto } from "./dtos/create-skill.dto";
import { Skills } from "./entities/skill";
import { UpdateSkillDto } from "./dtos/update-user.dto";

@Controller('skills')
export class SkillController {
  constructor(private skillService: SkillService) { }

  @Post()
  async create(@Body() createSkillDto: CreateSkillDto): Promise<Skills> {
    try {
      const newSkill: Skills = await this.skillService.create(createSkillDto)
      return newSkill
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Habilidad ya existe')
      }
      throw error
    }
  }

  @Get()
  async findAll(): Promise<Skills[]> {
    const users: Skills[] = await this.skillService.findAll()
    return users
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Skills> {
    const findById: Skills = await this.skillService.findOne(id)
    if (!findById) throw new NotFoundException('Habilidad no encontrado')
    return findById
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateSkillDto: UpdateSkillDto): Promise<{ user: Skills; message: string }> {
    return await this.skillService.update(id, updateSkillDto)
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return await this.skillService.delete(id);
  }

}