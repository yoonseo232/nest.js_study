import { Body, Controller, Post } from '@nestjs/common';
// import { TestInfo } from './TestInfo'
import { CreateTestDto } from './dto/create-test'
import { TestPutName } from './dto/test-put-name'
@Controller('test')
export class TestController {
    @Post()
    async createTest(@Body() dto: CreateTestDto): Promise<void>{
        console.log(dto);
    }

    @Post('/putName')
    async putName(@Body() dto: TestPutName): Promise<string>{
        console.log(dto);
        return;
    }
}