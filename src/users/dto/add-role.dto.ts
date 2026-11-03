import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsString({message: "Должно быть строкой"})
    readonly declare value: string;
    @IsNumber({}, {message: "Должно быть числом"})
    readonly declare userId: number;
}