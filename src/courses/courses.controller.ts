import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses') // caso esse campo esteja nulo :
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {} // criei um método construtor pra um serviço

    @Get() // posso incluir o mapeamento nesse campo e criar diversos mapeamentos
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id') 
    findOne(@Param('id') id: string) { // definindo qual parametro especifico eu quero pegar, nao preciso usar o params pra listar todos os parametros
        return this.coursesService.findOne(id); // como defini lá em cima, posso só passar o nome do parametro direto
    }

    @Post()
    //@HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.coursesService.update(id, updateCourseDto);
    }

    @Delete(':id') 
    remove(@Param('id') id: string) { 
        return this.coursesService.remove(id);
    }
}
