/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class LibAleService {
    saludarLibreria() {
        return 'Hola libreria!';
    }
}
