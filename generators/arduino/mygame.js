/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Thanks to Fred Lin for building BlockyDuino!
 * @author greich@ac-versailles.fr Guillaume Reich
 */

goog.provide('Blockly.Arduino.mygame');

goog.require('Blockly.Arduino');

Blockly.Arduino.mg_begin = function(block) {
  Blockly.Arduino.includes_['include_mg_begin'] =
  "#include \"Wire.h\"\n";
  Blockly.Arduino.definitions_['definition_mg_begin'] =
  "#define HEIGHT 64\n" +
  "#define WIDTH 128\n" +
  "#define WIRE_MAX 30\n" +
  "#define NEGATIVE 0\n" +
  "#define POSITIVE 1\n";
  Blockly.Arduino.variables_['variable_mg_begin'] =
  "const char Font[192][5] PROGMEM =\n" +
  "{\n" +
  "    { 0x00, 0x00, 0x00, 0x00, 0x00 }, // \" \" 0x20\n" +
  "    { 0x00, 0x00, 0x4f, 0x00, 0x00 }, // !   0x21\n" +
  "    { 0x00, 0x07, 0x00, 0x07, 0x00 }, // \"   0x22\n" +
  "    { 0x14, 0x7f, 0x14, 0x7f, 0x14 }, // #   0x23\n" +
  "    { 0x24, 0x2a, 0x7f, 0x2a, 0x12 }, // $   0x24\n" +
  "    { 0x23, 0x13, 0x08, 0x64, 0x62 }, // %   0x25\n" +
  "    { 0x36, 0x49, 0x55, 0x22, 0x50 }, // &   0x26\n" +
  "    { 0x00, 0x05, 0x03, 0x00, 0x00 }, // '   0x27\n" +
  "    { 0x00, 0x1c, 0x22, 0x41, 0x00 }, // (   0x28\n" +
  "    { 0x00, 0x41, 0x22, 0x1c, 0x00 }, // )   0x29\n" +
  "    { 0x14, 0x08, 0x3e, 0x08, 0x14 }, // *   0x2A\n" +
  "    { 0x08, 0x08, 0x3e, 0x08, 0x08 }, // +   0x2B\n" +
  "    { 0x00, 0x50, 0x30, 0x00, 0x00 }, // ,   0x2C\n" +
  "    { 0x08, 0x08, 0x08, 0x08, 0x08 }, // -   0x2D\n" +
  "    { 0x00, 0x60, 0x60, 0x00, 0x00 }, // .   0x2E\n" +
  "    { 0x20, 0x10, 0x08, 0x04, 0x02 }, // /   0x2F\n" +
  "    { 0x3e, 0x51, 0x49, 0x45, 0x3e }, // 0   0x30\n" +
  "    { 0x00, 0x42, 0x7f, 0x40, 0x00 }, // 1   0x31\n" +
  "    { 0x42, 0x61, 0x51, 0x49, 0x46 }, // 2   0x32\n" +
  "    { 0x21, 0x41, 0x45, 0x4b, 0x31 }, // 3   0x33\n" +
  "    { 0x18, 0x14, 0x12, 0x7f, 0x10 }, // 4   0x34\n" +
  "    { 0x27, 0x45, 0x45, 0x45, 0x39 }, // 5   0x35\n" +
  "    { 0x3c, 0x4a, 0x49, 0x49, 0x30 }, // 6   0x36\n" +
  "      { 0x01, 0x71, 0x09, 0x05, 0x03 }, // 7   0x37\n" +
  "    { 0x36, 0x49, 0x49, 0x49, 0x36 }, // 8   0x38\n" +
  "    { 0x06, 0x49, 0x49, 0x29, 0x1e }, // 9   0x39\n" +
  "    { 0x00, 0x36, 0x36, 0x00, 0x00 }, // :   0x3A\n" +
  "    { 0x00, 0x56, 0x36, 0x00, 0x00 }, // ;   0x3B\n" +
  "    { 0x08, 0x14, 0x22, 0x41, 0x00 }, // <   0x3C\n" +
  "    { 0x14, 0x14, 0x14, 0x14, 0x14 }, // =   0x3D\n" +
  "    { 0x00, 0x41, 0x22, 0x14, 0x08 }, // >   0x3E\n" +
  "    { 0x02, 0x01, 0x51, 0x09, 0x06 }, // ?   0x3F\n" +
  "    { 0x32, 0x49, 0x79, 0x41, 0x3e }, // @   0x40\n" +
  "    { 0x7e, 0x11, 0x11, 0x11, 0x7e }, // A   0x41\n" +
  "    { 0x7f, 0x49, 0x49, 0x49, 0x36 }, // B   0x42\n" +
  "    { 0x3e, 0x41, 0x41, 0x41, 0x22 }, // C   0x43\n" +
  "    { 0x7f, 0x41, 0x41, 0x22, 0x1c }, // D   0x44\n" +
  "    { 0x7f, 0x49, 0x49, 0x49, 0x41 }, // E   0x45\n" +
  "    { 0x7f, 0x09, 0x09, 0x09, 0x01 }, // F   0x46\n" +
  "    { 0x3e, 0x41, 0x49, 0x49, 0x7a }, // G   0x47\n" +
  "    { 0x7f, 0x08, 0x08, 0x08, 0x7f }, // H   0x48\n" +
  "    { 0x00, 0x41, 0x7f, 0x41, 0x00 }, // I   0x49\n" +
  "    { 0x20, 0x40, 0x41, 0x3f, 0x01 }, // J   0x4A\n" +
  "    { 0x7f, 0x08, 0x14, 0x22, 0x41 }, // K   0x4B\n" +
  "    { 0x7f, 0x40, 0x40, 0x40, 0x40 }, // L   0x4C\n" +
  "    { 0x7f, 0x02, 0x0c, 0x02, 0x7f }, // M   0x4D\n" +
  "    { 0x7f, 0x04, 0x08, 0x10, 0x7f }, // N   0x4E\n" +
  "    { 0x3e, 0x41, 0x41, 0x41, 0x3e }, // O   0x4F\n" +
  "    { 0x7f, 0x09, 0x09, 0x09, 0x06 }, // P   0X50\n" +
  "    { 0x3e, 0x41, 0x51, 0x21, 0x5e }, // Q   0X51\n" +
  "    { 0x7f, 0x09, 0x19, 0x29, 0x46 }, // R   0X52\n" +
  "    { 0x46, 0x49, 0x49, 0x49, 0x31 }, // S   0X53\n" +
  "    { 0x01, 0x01, 0x7f, 0x01, 0x01 }, // T   0X54\n" +
  "    { 0x3f, 0x40, 0x40, 0x40, 0x3f }, // U   0X55\n" +
  "    { 0x1f, 0x20, 0x40, 0x20, 0x1f }, // V   0X56\n" +
  "    { 0x3f, 0x40, 0x38, 0x40, 0x3f }, // W   0X57\n" +
  "    { 0x63, 0x14, 0x08, 0x14, 0x63 }, // X   0X58\n" +
  "    { 0x07, 0x08, 0x70, 0x08, 0x07 }, // Y   0X59\n" +
  "    { 0x61, 0x51, 0x49, 0x45, 0x43 }, // Z   0X5A\n" +
  "    { 0x00, 0x7f, 0x41, 0x41, 0x00 }, // [   0X5B\n" +
  "    { 0x02, 0x04, 0x08, 0x10, 0x20 }, // \ 0X5C\n" +
  "    { 0x00, 0x41, 0x41, 0x7f, 0x00 }, // ]   0X5D\n" +
  "    { 0x04, 0x02, 0x01, 0x02, 0x04 }, // ^   0X5E\n" +
  "    { 0x40, 0x40, 0x40, 0x40, 0x40 }, // _   0X5F\n" +
  "    { 0x00, 0x01, 0x02, 0x04, 0x00 }, // `   0X60\n" +
  "    { 0x20, 0x54, 0x54, 0x54, 0x78 }, // a   0X61\n" +
  "    { 0x7f, 0x48, 0x44, 0x44, 0x38 }, // b   0X62\n" +
  "    { 0x38, 0x44, 0x44, 0x44, 0x20 }, // c   0X63\n" +
  "    { 0x38, 0x44, 0x44, 0x48, 0x7f }, // d   0X64\n" +
  "    { 0x38, 0x54, 0x54, 0x54, 0x18 }, // e   0X65\n" +
  "    { 0x08, 0x7e, 0x09, 0x01, 0x02 }, // f   0X66\n" +
  "    { 0x0c, 0x52, 0x52, 0x52, 0x3e }, // g   0X67\n" +
  "    { 0x7f, 0x08, 0x04, 0x04, 0x78 }, // h   0X68\n" +
  "    { 0x00, 0x44, 0x7d, 0x40, 0x00 }, // i   0X69\n" +
  "    { 0x20, 0x40, 0x44, 0x3d, 0x00 }, // j   0X6A\n" +
  "    { 0x7f, 0x10, 0x28, 0x44, 0x00 }, // k   0X6B\n" +
  "    { 0x00, 0x41, 0x7f, 0x40, 0x00 }, // l   0X6C\n" +
  "    { 0x7c, 0x04, 0x18, 0x04, 0x78 }, // m   0X6D\n" +
  "    { 0x7c, 0x08, 0x04, 0x04, 0x78 }, // n   0X6E\n" +
  "    { 0x38, 0x44, 0x44, 0x44, 0x38 }, // o   0X6F\n" +
  "    { 0x7c, 0x14, 0x14, 0x14, 0x08 }, // p   0X70\n" +
  "    { 0x08, 0x14, 0x14, 0x18, 0x7c }, // q   0X71\n" +
  "    { 0x7c, 0x08, 0x04, 0x04, 0x08 }, // r   0X72\n" +
  "    { 0x48, 0x54, 0x54, 0x54, 0x20 }, // s   0X73\n" +
  "    { 0x04, 0x3f, 0x44, 0x40, 0x20 }, // t   0X74\n" +
  "    { 0x3c, 0x40, 0x40, 0x20, 0x7c }, // u   0X75\n" +
  "    { 0x1c, 0x20, 0x40, 0x20, 0x1c }, // v   0X76\n" +
  "    { 0x3c, 0x40, 0x30, 0x40, 0x3c }, // w   0X77\n" +
  "    { 0x44, 0x28, 0x10, 0x28, 0x44 }, // x   0X78\n" +
  "    { 0x0c, 0x50, 0x50, 0x50, 0x3c }, // y   0X79\n" +
  "    { 0x44, 0x64, 0x54, 0x4c, 0x44 }, // z   0X7A\n" +
  "    { 0x00, 0x08, 0x36, 0x41, 0x00 }, // {   0X7B\n" +
  "    { 0x00, 0x00, 0x7f, 0x00, 0x00 }, // |   0X7C\n" +
  "    { 0x00, 0x41, 0x36, 0x08, 0x00 }, // }   0X7D\n" +
  "    { 0x08, 0x08, 0x2a, 0x1c, 0x08 }, // ->  0X7E\n" +
  "    { 0x08, 0x1c, 0x2a, 0x08, 0x08 }, // <-  0X7F\n" +
"    { 0x00, 0x00, 0x0f, 0x08, 0x08 }, //     0x80\n" +
"    { 0x08, 0x08, 0x0f, 0x00, 0x00 }, //     0x81\n" +
"    { 0x2c, 0x32, 0x02, 0x32, 0x2c }, // ohm 0x82\n" +
"    { 0x44, 0x3c, 0x04, 0x7c, 0x44 }, // pi  0x83\n" +
"    { 0x63, 0x55, 0x49, 0x41, 0x41 }, // siguma0x84\n" +
"    { 0x14, 0x14, 0x7c, 0x14, 0x12 }, // sec 0x85\n" +
"    { 0x44, 0x3c, 0x14, 0x14, 0x74 }, // man 0x86\n" +
"    { 0x7c, 0x14, 0x1c, 0x14, 0x7c }, // en  0x87\n" +     
"    { 0x10, 0x10, 0x54, 0x10, 0x10 }, // waru0x88\n" +
"    { 0x7f, 0x7f, 0x7f, 0x7f, 0x7f }, //     0x89\n" +    
"    { 0x0f, 0x0f, 0x0f, 0x0f, 0x0f }, //     0x8A\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x8B\n" +     
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x8C\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x8D\n" +    
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x8E\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x8F\n" +     
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x90\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x91\n" +    
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x92\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x93\n" +     
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x94\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x95\n" +    
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x96\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x97\n" +     
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x98\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x99\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x9A\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x9B     \n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x9C\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x9D    \n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x9E\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0x9F\n" +
"    { 0x00, 0x00, 0x00, 0x00, 0x00 }, //     0xA0\n" +
"    { 0x70, 0x50, 0x70, 0x00, 0x00 }, //  .  0xA1    \n" +
"    { 0x00, 0x00, 0x0f, 0x01, 0x01 }, //  [  0xA2\n" +
"    { 0x40, 0x40, 0x78, 0x00, 0x00 }, //  ]  0xA3     \n" +
"    { 0x10, 0x20, 0x40, 0x00, 0x00 }, //  ,  0xA4\n" +
"    { 0x00, 0x18, 0x18, 0x00, 0x00 }, //  .  0xA5    \n" +
"    { 0x0a, 0x0a, 0x4a, 0x2a, 0x1e }, // wo  0xA6\n" +
"    { 0x04, 0x24, 0x34, 0x14, 0x0c }, // a   0xA7     \n" +
"    { 0x20, 0x10, 0x78, 0x04, 0x00 }, // i   0xA8\n" +
"    { 0x18, 0x08, 0x4c, 0x48, 0x38 }, // u   0xA9    \n" +
"    { 0x48, 0x48, 0x78, 0x48, 0x48 }, // e   0xAA\n" +
"    { 0x48, 0x28, 0x18, 0x7c, 0x08 }, // o   0xAB     \n" +
"    { 0x08, 0x7c, 0x08, 0x28, 0x18 }, // ya  0xAC\n" +
"    { 0x40, 0x48, 0x48, 0x78, 0x40 }, // yu  0xAD    \n" +
"    { 0x54, 0x54, 0x54, 0x7c, 0x00 }, // yo  0xAE\n" +
"    { 0x18, 0x00, 0x58, 0x40, 0x38 }, // tu  0xAF   \n" +
"    { 0x08, 0x08, 0x08, 0x08, 0x08 }, //  -  0xB0\n" +
"    { 0x01, 0x41, 0x3d, 0x09, 0x07 }, //  a  0xB1    \n" +
"    { 0x20, 0x10, 0x7c, 0x02, 0x01 }, //  i  0xB2\n" +
"    { 0x0e, 0x02, 0x43, 0x22, 0x1e }, //  u  0xB3     \n" +
"    { 0x42, 0x42, 0x7e, 0x42, 0x42 }, //  e  0xB4\n" +
"    { 0x22, 0x12, 0x0a, 0x7f, 0x02 }, //  o  0xB5    \n" +
"    { 0x42, 0x3f, 0x02, 0x42, 0x3e }, // ka  0xB6\n" +
"    { 0x0a, 0x0a, 0x7f, 0x0a, 0x0a }, // ki  0xB7     \n" +
"    { 0x08, 0x46, 0x42, 0x22, 0x1e }, // ku  0xB8\n" +
"    { 0x04, 0x03, 0x42, 0x3e, 0x04 }, // ke  0xB9    \n" +
"    { 0x42, 0x42, 0x42, 0x42, 0x7e }, // ko  0xBA\n" +
"    { 0x02, 0x4f, 0x22, 0x1f, 0x02 }, // sa  0xBB     \n" +
"    { 0x4a, 0x4a, 0x40, 0x20, 0x1c }, // si  0xBC\n" +
"    { 0x42, 0x22, 0x12, 0x2a, 0x46 }, // su  0xBD    \n" +
"    { 0x02, 0x3f, 0x42, 0x4a, 0x46 }, // se  0xBE\n" +
"    { 0x06, 0x48, 0x40, 0x20, 0x1e }, // so  0xBF\n" +
"    { 0x08, 0x46, 0x4a, 0x32, 0x1e }, // ta  0xC0\n" +
"    { 0x0a, 0x4a, 0x3e, 0x09, 0x08 }, // ti  0xC1    \n" +
"    { 0x0e, 0x00, 0x4e, 0x20, 0x1e }, // tu  0xC2\n" +
"    { 0x04, 0x45, 0x3d, 0x05, 0x04 }, // te  0xC3     \n" +
"    { 0x00, 0x7f, 0x08, 0x10, 0x00 }, // to  0xC4\n" +
"    { 0x44, 0x24, 0x1f, 0x04, 0x04 }, // na  0xC5    \n" +
"    { 0x40, 0x42, 0x42, 0x42, 0x40 }, // ni  0xC6\n" +
"    { 0x42, 0x2a, 0x12, 0x2a, 0x06 }, // nu  0xC7     \n" +
"    { 0x22, 0x12, 0x7b, 0x16, 0x22 }, // ne  0xC8\n" +
"    { 0x00, 0x40, 0x20, 0x1f, 0x00 }, // no  0xC9    \n" +
"    { 0x78, 0x00, 0x02, 0x04, 0x78 }, // ha  0xCA\n" +
"    { 0x3f, 0x44, 0x44, 0x44, 0x44 }, // hi  0xCB     \n" +
"    { 0x02, 0x42, 0x42, 0x22, 0x1e }, // hu  0xCC\n" +
"    { 0x04, 0x02, 0x04, 0x08, 0x30 }, // he  0xCD    \n" +
"    { 0x32, 0x02, 0x7f, 0x02, 0x32 }, // ho  0xCE\n" +
"    { 0x02, 0x12, 0x22, 0x52, 0x0e }, // ma  0xCF   \n" +
"    { 0x00, 0x2a, 0x2a, 0x2a, 0x40 }, // mi  0xD0\n" +
"    { 0x38, 0x24, 0x22, 0x20, 0x70 }, // mu  0xD1    \n" +
"    { 0x40, 0x28, 0x10, 0x28, 0x06 }, // me  0xD2\n" +
"    { 0x0a, 0x3e, 0x4a, 0x4a, 0x4a }, // mo  0xD3     \n" +
"    { 0x04, 0x7f, 0x04, 0x14, 0x0c }, // ya  0xD4\n" +
"    { 0x40, 0x42, 0x42, 0x7e, 0x40 }, // yu  0xD5    \n" +
"    { 0x4a, 0x4a, 0x4a, 0x4a, 0x7e }, // yo  0xD6\n" +
"    { 0x04, 0x05, 0x45, 0x25, 0x1c }, // ra  0xD7     \n" +
"    { 0x0f, 0x40, 0x20, 0x1f, 0x00 }, // ri  0xD8\n" +
"    { 0x7c, 0x00, 0x7e, 0x80, 0x30 }, // ru  0xD9    \n" +
"    { 0x7e, 0x40, 0x20, 0x10, 0x08 }, // re  0xDA\n" +
"    { 0x7e, 0x42, 0x42, 0x42, 0x7e }, // ro  0xDB     \n" +
"    { 0x0e, 0x02, 0x42, 0x22, 0x1e }, // wa  0xDC\n" +
"    { 0x42, 0x42, 0x40, 0x20, 0x18 }, // n   0xDD    \n" +
"    { 0x02, 0x04, 0x01, 0x02, 0x00 }, // \"   0xDE\n" +
"    { 0x07, 0x05, 0x07, 0x00, 0x00 } // .   0xDF\n" +
"\n" +                
"  };\n" +
  "const uint8_t OLED_I2C_ADDRES = 0x3C;\n" +
  "uint8_t buf[WIDTH * HEIGHT/8];\n" +
  "uint32_t nextFrameMillis;\n";
  Blockly.Arduino.userFunctions_['userfunction_mg_begin'] =
  "void init_SSD1306(){\n" +
  "  Wire.beginTransmission(OLED_I2C_ADDRES);\n" +
  "    Wire.write(0x80); Wire.write(0xAE); //set display off\n" +
  "    Wire.write(0x00); Wire.write(0xA8); Wire.write(0x3F); //set multiplex ratio\n" +
  "    Wire.write(0x00); Wire.write(0xD3); Wire.write(0x00); //set display offset\n" +
  "    Wire.write(0x80); Wire.write(0x40); //set display start line\n" +
  "    Wire.write(0x80); Wire.write(0xA0); //set segment re-map\n" +
  "    Wire.write(0x80); Wire.write(0xC0); //set com output scan direction\n" +
  "    Wire.write(0x00); Wire.write(0xDA); Wire.write(0x12); //set com pins hardware configuration\n" +
  "    Wire.write(0x00); Wire.write(0x81); Wire.write(0x7F); //set contrast control\n" +
  "    Wire.write(0x80); Wire.write(0xA4); //entire display on\n" +
  "    Wire.write(0x80); Wire.write(0xA6); //set normal/inverse display\n" +
  "    Wire.write(0x00); Wire.write(0xD5); Wire.write(0x80); //set display clock\n" +
  "  Wire.endTransmission();\n" +
  "  Wire.beginTransmission(OLED_I2C_ADDRES);\n" +
  "    Wire.write(0x00); Wire.write(0x20); Wire.write(0b00); //horizontal addressing mode\n" +
  "    Wire.write(0x00); Wire.write(0x22); Wire.write(0);  Wire.write(7);  //page 0-7\n" +
  "    Wire.write(0x00); Wire.write(0x21); Wire.write(0);  Wire.write(127);  //colum 0-127\n" +
  "    Wire.write(0x00); Wire.write(0x8D); Wire.write(0x14);\n" +
  "    Wire.write(0x80); Wire.write(0xAF); //set display on\n" +
  "  Wire.endTransmission();\n" +
  "}\n" +
  "\n" +
  "boolean btn_Check(uint8_t btn){\n" +
  "  return PIND & btn;\n" +
  "}\n" +
  "\n" +
  "void clear_All(){\n" +
  "  memset(buf, 0, sizeof(buf));\n" +
  "}\n" +
  "\n" +
  "void fill_All(){\n" +
  "  memset(buf, 0xff, sizeof(buf));\n" +
  "}\n" +
  "\n" +
  "void draw_Bitmap(uint8_t x, uint8_t y, float sx, float sy, uint8_t *bmp, uint8_t wb ){\n" +
  "  if ((x >= WIDTH) || (y >= HEIGHT) || ((x + 8 * sx - 1) < 0) || ((y + 8 * sy - 1) < 0)) {\n" +
  "    return;\n" +
  "  }\n" +
  "  char colum;\n" +
  "  for (int8_t i=0; i<8; i++ ) {\n" +
  "    colum = bmp[i];\n" +
  "    for (int8_t j = 0; j<8; j++) {\n" +
  "      uint8_t dot = (colum & 0x1) ? true : false;\n" +
  "      for (uint8_t a = 0; a < sx; a++ ) {\n" +
  "        for (uint8_t b = 0; b < sy; b++ ) {\n" +
  "         draw_Pixel(x + (i * sx) + a, y + (j * sy) + b, dot);\n" +
  "        }\n" +
  "      }\n" +
  "      colum >>= 1;\n" +
  "    }\n" +
  "  }\n" +
  "}\n" +
  "\n" +  
  "void draw_String(uint8_t x, uint8_t y, String s, float size,  uint8_t wb ){\n" +
  "  if ((x >= WIDTH) || (y >= HEIGHT) || ((x + 5 * size - 1) < 0) || ((y + 8 * size - 1) < 0)) {\n" +
  "    return;\n" +
  "  }\n" +
  "  int8_t ii=0;\n" +
  "  for (int8_t i=0; i<s.length(); i++ ) {\n" +
  "    if(s.charAt(i)=='\\\\'){\n" +
  "      y+=8*size;\n" +
  "      ii=0;\n" +
  "    }else{\n" +
  "      draw_Char(x+8*size*ii,y,s.charAt(i),size, wb);\n" +
  "      ii++;\n" +
  "    }\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void draw_Char(uint8_t x, uint8_t y, char c, float size,  uint8_t wb ){\n" +
  "  if ((x >= WIDTH) || (y >= HEIGHT) || ((x + 5 * size - 1) < 0) || ((y + 8 * size - 1) < 0)) {\n" +
  "    return;\n" +
  "  }\n" +
  "  char colum;\n" +
  "  for (int8_t i=0; i<5; i++ ) {\n" +
  "    colum = pgm_read_byte(&Font[c-0x20][i]);\n" +
  "    for (int8_t j = 0; j<8; j++) {\n" +
  "      uint8_t dot = (colum & 0x1) ? true : false;\n" +
  "      for (uint8_t a = 0; a < size; a++ ) {\n" +
  "        for (uint8_t b = 0; b < size; b++ ) {\n" +
  "          draw_Pixel(x + (i * size) + a, y + (j * size) + b, dot);\n" +
  "        }\n" +
  "      }\n" +
  "      colum >>= 1;\n" +
  "    }\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void draw_Num(uint8_t x, uint8_t y, int16_t n, float size,  uint8_t wb ){\n" +
  "  if ((x >= WIDTH) || (y >= HEIGHT) || ((x + 5 * size - 1) < 0) || ((y + 8 * size - 1) < 0)) {\n" +
  "    return;\n" +
  "  }\n" +
  "  int8_t d;\n" +
  "  uint8_t p=0;\n" +
  "  if(n<0){draw_Char(x+8*size*p,y,'-',size,wb);p++;n=-n;}\n" +
  "  d = n/10000;\n" +
  "  if(d){draw_Char(x+8*size*p,y,d+0x30,size,wb);p++;}\n" +
  "  n %= 10000;\n" +
  "  d = n/1000;\n" +
  "  if(d){draw_Char(x+8*size*p,y,d+0x30,size,wb);p++;}\n" +
  "  n %= 1000;\n" +
  "  d = n/100;\n" +
  "  if(d){draw_Char(x+8*size*p,y,d+0x30,size,wb);p++;}\n" +
  "  n %= 100;\n" +
  "  d = n/10;\n" +
  "  if(d){draw_Char(x+8*size*p,y,d+0x30,size,wb);p++;}\n" +
  "  n %= 10;\n" +
  "  d = n;\n" +
  "  draw_Char(x+8*size*p,y,d+0x30,size,wb);\n" +
  "}\n" +
  " \n" +
  "void fill_Ellipse( uint8_t x, uint8_t y, uint8_t rx, uint8_t ry, int wb )\n" +
  "{\n" +
  "  int8_t xt, x1, yt, y1, r;\n" +
  "  if (rx > ry) {\n" +
  "    xt=r=rx; yt=0;\n" +
  "    while (xt>=yt) {\n" +
  "      x1=xt*ry/rx;\n" +
  "      y1=yt*ry/rx;\n" +
  "      draw_Fast_HLine(x-xt, y+y1, 2*xt, wb);\n" +
  "      draw_Fast_HLine(x-xt, y-y1, 2*xt, wb);\n" +
  "      draw_Fast_HLine(x-yt, y+x1, 2*yt, wb);\n" +
  "      draw_Fast_HLine(x-yt, y-x1, 2*yt, wb);\n" +
  "      if ((r -= yt++ * 2 + 1) <= 0) r += --xt * 2;\n" +
  "    }\n" +
  "  } else {\n" +
  "    xt=r=ry; yt=0;\n" +
  "    while (xt>=yt) {\n" +
  "      x1=xt*rx/ry;\n" +
  "      y1=yt*rx/ry;\n" +
  "      draw_Fast_VLine(x+x1, y-yt, 2*yt, wb);\n" +
  "      draw_Fast_VLine(x-x1, y-yt, 2*yt, wb);\n" +
  "      draw_Fast_VLine(x+y1, y-xt, 2*xt, wb);\n" +
  "      draw_Fast_VLine(x-y1, y-xt, 2*xt, wb);\n" +
  "      if ((r -= yt++ * 2 + 1) <= 0) r += --xt * 2;\n" +
  "    }\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void draw_Ellipse( uint8_t x, uint8_t y, uint8_t rx, uint8_t ry, int wb )\n" +
  "{\n" +
  "  int8_t xt, x1, yt, y1, r;\n" +
  "  if (rx > ry) {\n" +
  "    xt=r=rx; yt=0;\n" +
  "    while (xt>=yt) {\n" +
  "      x1=xt*ry/rx;\n" +
  "      y1=yt*ry/rx;\n" +
  "      draw_Pixel(x+xt, y+y1, wb);\n" +
  "      draw_Pixel(x+xt, y-y1, wb);\n" +
  "      draw_Pixel(x-xt, y+y1, wb);\n" +
  "      draw_Pixel(x-xt, y-y1, wb);\n" +
  "      draw_Pixel(x+yt, y+x1, wb);\n" +
  "      draw_Pixel(x+yt, y-x1, wb);\n" +
  "      draw_Pixel(x-yt, y+x1, wb);\n" +
  "      draw_Pixel(x-yt, y-x1, wb);\n" +
  "      if ((r -= yt++ * 2 + 1) <= 0) r += --xt * 2;\n" +
  "    }\n" +
  "  } else {\n" +
  "    xt=r=ry; yt=0;\n" +
  "    while (xt>=yt) {\n" +
  "      x1=xt*rx/ry;\n" +
  "      y1=yt*rx/ry;\n" +
  "      draw_Pixel(x+x1, y+yt, wb);\n" +
  "      draw_Pixel(x+x1, y-yt, wb);\n" +
  "      draw_Pixel(x-x1, y+yt, wb);\n" +
  "      draw_Pixel(x-x1, y-yt, wb);\n" +
  "      draw_Pixel(x+y1, y+xt, wb);\n" +
  "      draw_Pixel(x+y1, y-xt, wb);\n" +
  "      draw_Pixel(x-y1, y+xt, wb);\n" +
  "      draw_Pixel(x-y1, y-xt, wb);\n" +
  "      if ((r -= yt++ * 2 + 1) <= 0) r += --xt * 2;\n" +
  "    }\n" +
  "  }\n" +
  "}\n" +
  "\n" +  
  "void fill_CornerR(uint8_t x, uint8_t y, uint8_t rad, uint8_t corner, uint8_t length, boolean wb){\n" +
  "  int8_t cx = rad;\n" +
  "  int8_t cy = 0;\n" +
  "  int8_t F = -2 * rad + 3;\n" +
  "\n" +    
  "  while ( cx >= cy ) {\n" +
  "    if (corner & 0x1) {\n" +
  "      draw_Fast_VLine( x + cx, y - cy, 2*cy+length, wb );\n" +
  "      draw_Fast_VLine( x + cy, y - cx, 2*cx+length, wb );\n" +
  "    }\n" +
  "    if (corner & 0x2) {\n" +
  "      draw_Fast_VLine( x - cx, y - cy, 2*cy+length, wb );\n" +
  "      draw_Fast_VLine( x - cy, y - cx, 2*cx+length, wb );\n" +
  "    }\n" +
  "    if ( F >= 0 ) {\n" +
  "      cx--;\n" +
  "      F -= 4 * cx;\n" +
  "    }\n" +
  "    cy++;\n" +
  "    F += 4 * cy + 2;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void fill_Circle(uint8_t x, uint8_t y, uint8_t rad, uint8_t wb){\n" +
  "  int8_t cx = rad;\n" +
  "  int8_t cy = 0;\n" +
  "  int8_t F = -2 * rad + 3;\n" +
  "\n" +                    
  "  while ( cx >= cy ) {\n" +
  "    draw_Line(cy + x, cx + y, -cy + x, cx + y,wb);\n" +
  "    draw_Line(cx + x, cy + y, -cx + x, cy + y,wb);\n" +
  "    draw_Line(-cy + x, -cx + y, cy + x, -cx + y,wb);\n" +
  "    draw_Line(-cx + x, -cy + y, cx + x, -cy + y,wb);\n" +
  "    if ( F >= 0 ) {\n" +
  "      cx--;\n" +
  "      F -= 4 * cx;\n" +
  "    }\n" +
  "    cy++;\n" +
  "    F += 4 * cy + 2;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void draw_CornerR(uint8_t x, uint8_t y, uint8_t rad, uint8_t corner, boolean wb){\n" +
  "  int8_t cx = rad;\n" +
  "  int8_t cy = 0;\n" +
  "  int8_t F = -2 * rad + 3;\n" +
  "\n" +    
  "  while ( cx >= cy ) {\n" +
  "    if (corner & 0x4) {\n" +
  "      draw_Pixel( x + cx, y + cy, wb );\n" +
  "      draw_Pixel( x + cy, y + cx, wb );\n" +
  "    }\n" +
  "    if (corner & 0x2) {\n" +
  "      draw_Pixel( x + cx, y - cy, wb );\n" +
  "      draw_Pixel( x + cy, y - cx, wb );\n" +
  "    }\n" +
  "    if (corner & 0x8) {\n" +
  "      draw_Pixel( x - cy, y + cx, wb );\n" +
  "      draw_Pixel( x - cx, y + cy, wb );\n" +
  "    }\n" +
  "    if (corner & 0x1) {\n" +
  "      draw_Pixel( x - cy, y - cx, wb );\n" +
  "      draw_Pixel( x - cx, y - cy, wb );\n" +
  "    }\n" +
  "    if ( F >= 0 ) {\n" +
  "      cx--;\n" +
  "      F -= 4 * cx;\n" +
  "    }\n" +
  "    cy++;\n" +
  "    F += 4 * cy + 2;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void draw_Circle(uint8_t x, uint8_t y, uint8_t rad, boolean wb){\n" +
  "  int8_t cx = rad;\n" +
  "  int8_t cy = 0;\n" +
  "  int8_t F = -2 * rad + 3;\n" +
  "\n" +  
  "  while ( cx >= cy ) {\n" +
  "    draw_Pixel( x + cx, y + cy, wb );\n" +
  "    draw_Pixel( x - cx, y + cy, wb );\n" +
  "    draw_Pixel( x + cx, y - cy, wb );\n" +
  "    draw_Pixel( x - cx, y - cy, wb );\n" +
  "    draw_Pixel( x + cy, y + cx, wb );\n" +
  "    draw_Pixel( x - cy, y + cx, wb );\n" +
  "    draw_Pixel( x + cy, y - cx, wb );\n" +
  "    draw_Pixel( x - cy, y - cx, wb );\n" +
  "    if ( F >= 0 ) {\n" +
  "      cx--;\n" +
  "      F -= 4 * cx;\n" +
  "    }\n" +
  "    cy++;\n" +
  "    F += 4 * cy + 2;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void fill_RoundRect(uint8_t x, uint8_t y, uint8_t w, uint8_t h, uint8_t r, uint8_t wb){\n" +
  "  fill_Rect(x+r, y, w-2*r, h, wb);\n" +
  "  fill_CornerR(x+w-r-1, y+r, r, 1, h-2*r-1, wb);\n" +
  "  fill_CornerR(x+r, y+r, r, 2, h-2*r-1, wb);\n" +
  "}\n" +
  "\n" +
  "void fill_Rect(uint8_t x, uint8_t y, uint8_t w, uint8_t h, uint8_t wb){\n" +
  "  for(int i=x; i<x+w; i++){\n" +
  "    draw_Fast_VLine(i, y, h, wb);\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void draw_RoundRect(uint8_t x, uint8_t y, uint8_t w, uint8_t h, uint8_t r, uint8_t wb){\n" +
  "  draw_Fast_HLine(x+r, y, w-2*r, wb);\n" +
  "  draw_Fast_HLine(x+r, y+h-1, w-2*r, wb);\n" +
  "  draw_Fast_VLine(x, y+r, h-2*r, wb);\n" +
  "  draw_Fast_VLine(x+w-1, y+r, h-2*r, wb);\n" +
  "\n" +
  "  draw_CornerR(x+r, y+r, r, 1, wb);\n" +
  "  draw_CornerR(x+w-r-1, y+r, r, 2, wb);\n" +
  "  draw_CornerR(x+w-r-1, y+h-r-1, r, 4, wb);\n" +
  "  draw_CornerR(x+r, y+h-r-1, r, 8, wb);\n" +
  "}\n" +
  "\n" +
  "void draw_Rect(uint8_t x, uint8_t y, uint8_t w, uint8_t h, uint8_t wb){\n" +
  "  draw_Fast_HLine(x, y, w, wb);\n" +
  "  draw_Fast_HLine(x, y+h-1, w, wb);\n" +
  "  draw_Fast_VLine(x, y, h, wb);\n" +
  "  draw_Fast_VLine(x+w-1, y, h, wb);\n" +
  "}\n" +
  "\n" +
  "void draw_Fast_VLine(int8_t x, int8_t y, uint8_t h, boolean pos_neg){\n" +
  "  for (int i = max(0,y); i < min(y+h,HEIGHT); i++){\n" +
  "    draw_Pixel(x,i,pos_neg);\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void draw_Fast_HLine(int8_t x, int8_t y, uint8_t w, boolean pos_neg){\n" +
  "  for (int i = max(0,x); i < min(x+w,WIDTH); i++){\n" +
  "    draw_Pixel(i,y,pos_neg);\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "void draw_Line(uint8_t x0, uint8_t y0, uint8_t x1, uint8_t y1, boolean pos_neg){\n" +
  "  uint8_t temp;\n" +
  "  uint8_t x, y;\n" +
  "  uint8_t ystep;\n" +
  "\n" +
  "  uint8_t inclination = (abs(y1 - y0) > abs(x1 - x0));\n" +
  "  if(inclination){\n" +
  "    temp = x0; x0 = y0; y0= temp;\n" +
  "    temp = x1; x1 = y1; y1= temp;\n" +
  "  }\n" +
  "  if(x0 > x1){\n" +
  "    temp = x0; x0 = x1; x1= temp;\n" +
  "    temp = y0; y0 = y1; y1= temp;\n" +
  "  }\n" +
  "  uint8_t deltaX = x1 - x0;\n" +
  "  uint8_t deltaY = abs(y1 - y0);\n" +
  "  int dummyY = deltaX/2;\n" +
  "  y = y0;\n" +
  "  if(y0 < y1)ystep = 1; else ystep = -1;\n" +
  "  for(x = x0; x < x1; x++){\n" +
  "    if(inclination) draw_Pixel(y, x, pos_neg); else draw_Pixel(x, y, pos_neg);\n" +
  "    dummyY -= deltaY;\n" +
  "    if(dummyY < 0){\n" +
  "      y += ystep;\n" +
  "      dummyY += deltaX;\n" +
  "    }\n" +
  "  }\n" +
  "}\n" +
"\n" +
  "void draw_Pixel(uint8_t x, uint8_t y, boolean pos_neg){\n" +
  "  x=127-x;\n" +
  "  y=63-y;\n" +
  "  if(x<0 || x>127 || y<0 || y>63)return;\n" +
  "  if(pos_neg) buf[x + (y/8)*WIDTH] |=  (1 << (y&7));  //set 1 to segment after bit shift\n" +
  "  else buf[x + (y/8)*WIDTH] &= ~(1 << (y&7));  //set 0 to segment after bit shift\n" +
  "}\n" +
  "\n" +
  "void flash(){\n" +
  "  uint16_t count = 0;\n" +
  "  uint8_t bytesOut = 1;\n" +
  "\n" +  
  "  Wire.beginTransmission(OLED_I2C_ADDRES);\n" +
  "  Wire.write(0b01000000);\n" +
  "  //send byte data for all segments\n" +
  "  while(count<128*8) {\n" +
  "    if(bytesOut >= WIRE_MAX) {\n" +
  "      Wire.endTransmission();\n" +
  "    Wire.beginTransmission(OLED_I2C_ADDRES);\n" +
  "    Wire.write(0b01000000);\n" +
  "    bytesOut = 1;\n" +
  "  }\n" +
  "  Wire.write(buf[count]);\n" +
  "  count++;\n" +
  "  bytesOut++;\n" +
  "}\n" +
  "Wire.endTransmission();\n" +
  "}\n" +
  "bool update(uint8_t interval){\n" +
  " if ((nextFrameMillis - millis()) > interval){\n" +
  "    nextFrameMillis = millis() + interval;\n" +
  "    return true;\n" +
  "  }else{\n" +
  "    return false;\n" +
  "  }\n" +
  "}\n";
  Blockly.Arduino.setups_['setup_mg_begin']=
  "//int i,j,k;\n" +
  "Wire.begin();\n" +
  "Wire.setClock(400000);\n" +
  "delay(100);\n" +
  "init_SSD1306();\n";
  var code = "";
  return code;
};

Blockly.Arduino['mg_width'] = function(block) {
  var code = '(int)WIDTH';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
  
};

Blockly.Arduino['mg_height'] = function(block) {
  var code = '(int)HEIGHT';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mg_clear_all'] = function(block) {
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'clear_All();\n';
  if(value_b_w == 'true'){code = 'fill_All();\n';}
  else{code = 'clear_All();\n';}
  return code;
};

Blockly.Arduino['mg_flash'] = function(block) {
  var code = 'flash();\n';
  return code;
};

Blockly.Arduino['mg_update'] = function(block) {
  var math_interval = block.getFieldValue('INTERVAL');
  var code = "while(!update(" + math_interval + "));\n";
  return code;
};

Blockly.Arduino['mg_draw_pixel'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Pixel(" + value_x + "," + value_y + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_line'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Line(" + value_x0 + "," + value_y0 + "," + value_x1 + "," + value_y1 + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_fast_vline'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Fast_VLine(" + value_x + "," + value_y + "," + value_h + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_fast_hline'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Fast_HLine(" + value_x + "," + value_y + "," + value_w + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_rect'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
  var value_h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Rect(" + value_x + "," + value_y + "," + value_w + "," + value_h + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_round_rect'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
  var value_h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
  var value_r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_RoundRect(" + value_x + "," + value_y + "," + value_w + "," + value_h + "," + value_r + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_fill_rect'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
  var value_h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "fill_Rect(" + value_x + "," + value_y + "," + value_w + "," + value_h + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_fill_round_rect'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
  var value_h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
  var value_r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "fill_RoundRect(" + value_x + "," + value_y + "," + value_w + "," + value_h + "," + value_r + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_circle'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Circle(" + value_x + "," + value_y + "," + value_r + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_fill_circle'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "fill_Circle(" + value_x + "," + value_y + "," + value_r + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_ellipse'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var value_a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Ellipse(" + value_x + "," + value_y + "," + value_r + "," + value_a + "," + value_b + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_fill_ellipse'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var value_a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "fill_Ellipse(" + value_x + "," + value_y + "," + value_r + "," + value_a + "," + value_b + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_string'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_c = Blockly.Arduino.valueToCode(block, 'C', Blockly.Arduino.ORDER_ATOMIC);
  var value_s = Blockly.Arduino.valueToCode(block, 'S', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_String(" + value_x + "," + value_y + "," + value_c + "," + value_s + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_char'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_c = Blockly.Arduino.valueToCode(block, 'C', Blockly.Arduino.ORDER_ATOMIC);
  var value_s = Blockly.Arduino.valueToCode(block, 'S', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Char(" + value_x + "," + value_y + "," + value_c + "," + value_s + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_num'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_c = Blockly.Arduino.valueToCode(block, 'C', Blockly.Arduino.ORDER_ATOMIC);
  var value_s = Blockly.Arduino.valueToCode(block, 'S', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Num(" + value_x + "," + value_y + "," + value_c + "," + value_s + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_draw_bitmap'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
  var value_h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
  var value_bmp = Blockly.Arduino.valueToCode(block, 'BMP', Blockly.Arduino.ORDER_ATOMIC);
  var value_b_w = Blockly.Arduino.valueToCode(block, 'W/B', Blockly.Arduino.ORDER_ATOMIC);
  var code = "draw_Bitmap(" + value_x + "," + value_y + "," + value_w + "," + value_h + "," + value_bmp + "," + value_b_w + ");\n";
  return code;
};

Blockly.Arduino['mg_create_bitmap'] = function(block) {
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var math_e00,math_e10,math_e20,math_e30,math_e40,math_e50,math_e60,math_e70;
  var math_e01,math_e11,math_e21,math_e31,math_e41,math_e51,math_e61,math_e71;
  var math_e02,math_e12,math_e22,math_e32,math_e42,math_e52,math_e62,math_e72;
  var math_e03,math_e13,math_e23,math_e33,math_e43,math_e53,math_e63,math_e73;
  var math_e04,math_e14,math_e24,math_e34,math_e44,math_e54,math_e64,math_e74;
  var math_e05,math_e15,math_e25,math_e35,math_e45,math_e55,math_e65,math_e75;
  var math_e06,math_e16,math_e26,math_e36,math_e46,math_e56,math_e66,math_e76;
  var math_e07,math_e17,math_e27,math_e37,math_e47,math_e57,math_e67,math_e77;
  if(block.getFieldValue('e00')=='TRUE'){math_e00 = 1;}else {math_e00 = 0;}
  if(block.getFieldValue('e01')=='TRUE'){math_e01 = 1;}else {math_e01 = 0;}
  if(block.getFieldValue('e02')=='TRUE'){math_e02 = 1;}else {math_e02 = 0;}
  if(block.getFieldValue('e03')=='TRUE'){math_e03 = 1;}else {math_e03 = 0;}
  if(block.getFieldValue('e04')=='TRUE'){math_e04 = 1;}else {math_e04 = 0;}
  if(block.getFieldValue('e05')=='TRUE'){math_e05 = 1;}else {math_e05 = 0;}
  if(block.getFieldValue('e06')=='TRUE'){math_e06 = 1;}else {math_e06 = 0;}
  if(block.getFieldValue('e07')=='TRUE'){math_e07 = 1;}else {math_e07 = 0;}
  if(block.getFieldValue('e10')=='TRUE'){math_e10 = 1;}else {math_e10 = 0;}
  if(block.getFieldValue('e11')=='TRUE'){math_e11 = 1;}else {math_e11 = 0;}
  if(block.getFieldValue('e12')=='TRUE'){math_e12 = 1;}else {math_e12 = 0;}
  if(block.getFieldValue('e13')=='TRUE'){math_e13 = 1;}else {math_e13 = 0;}
  if(block.getFieldValue('e14')=='TRUE'){math_e14 = 1;}else {math_e14 = 0;}
  if(block.getFieldValue('e15')=='TRUE'){math_e15 = 1;}else {math_e15 = 0;}
  if(block.getFieldValue('e16')=='TRUE'){math_e16 = 1;}else {math_e16 = 0;}
  if(block.getFieldValue('e17')=='TRUE'){math_e17 = 1;}else {math_e17 = 0;}
  if(block.getFieldValue('e20')=='TRUE'){math_e20 = 1;}else {math_e20 = 0;}
  if(block.getFieldValue('e21')=='TRUE'){math_e21 = 1;}else {math_e21 = 0;}
  if(block.getFieldValue('e22')=='TRUE'){math_e22 = 1;}else {math_e22 = 0;}
  if(block.getFieldValue('e23')=='TRUE'){math_e23 = 1;}else {math_e23 = 0;}
  if(block.getFieldValue('e24')=='TRUE'){math_e24 = 1;}else {math_e24 = 0;}
  if(block.getFieldValue('e25')=='TRUE'){math_e25 = 1;}else {math_e25 = 0;}
  if(block.getFieldValue('e26')=='TRUE'){math_e26 = 1;}else {math_e26 = 0;}
  if(block.getFieldValue('e27')=='TRUE'){math_e27 = 1;}else {math_e27 = 0;}
  if(block.getFieldValue('e30')=='TRUE'){math_e30 = 1;}else {math_e30 = 0;}
  if(block.getFieldValue('e31')=='TRUE'){math_e31 = 1;}else {math_e31 = 0;}
  if(block.getFieldValue('e32')=='TRUE'){math_e32 = 1;}else {math_e32 = 0;}
  if(block.getFieldValue('e33')=='TRUE'){math_e33 = 1;}else {math_e33 = 0;}
  if(block.getFieldValue('e34')=='TRUE'){math_e34 = 1;}else {math_e34 = 0;}
  if(block.getFieldValue('e35')=='TRUE'){math_e35 = 1;}else {math_e35 = 0;}
  if(block.getFieldValue('e36')=='TRUE'){math_e36 = 1;}else {math_e36 = 0;}
  if(block.getFieldValue('e37')=='TRUE'){math_e37 = 1;}else {math_e37 = 0;}
  if(block.getFieldValue('e40')=='TRUE'){math_e40 = 1;}else {math_e40 = 0;}
  if(block.getFieldValue('e41')=='TRUE'){math_e41 = 1;}else {math_e41 = 0;}
  if(block.getFieldValue('e42')=='TRUE'){math_e42 = 1;}else {math_e42 = 0;}
  if(block.getFieldValue('e43')=='TRUE'){math_e43 = 1;}else {math_e43 = 0;}
  if(block.getFieldValue('e44')=='TRUE'){math_e44 = 1;}else {math_e44 = 0;}
  if(block.getFieldValue('e45')=='TRUE'){math_e45 = 1;}else {math_e45 = 0;}
  if(block.getFieldValue('e46')=='TRUE'){math_e46 = 1;}else {math_e46 = 0;}
  if(block.getFieldValue('e47')=='TRUE'){math_e47 = 1;}else {math_e47 = 0;}
  if(block.getFieldValue('e50')=='TRUE'){math_e50 = 1;}else {math_e50 = 0;}
  if(block.getFieldValue('e51')=='TRUE'){math_e51 = 1;}else {math_e51 = 0;}
  if(block.getFieldValue('e52')=='TRUE'){math_e52 = 1;}else {math_e52 = 0;}
  if(block.getFieldValue('e53')=='TRUE'){math_e53 = 1;}else {math_e53 = 0;}
  if(block.getFieldValue('e54')=='TRUE'){math_e54 = 1;}else {math_e54 = 0;}
  if(block.getFieldValue('e55')=='TRUE'){math_e55 = 1;}else {math_e55 = 0;}
  if(block.getFieldValue('e56')=='TRUE'){math_e56 = 1;}else {math_e56 = 0;}
  if(block.getFieldValue('e57')=='TRUE'){math_e57 = 1;}else {math_e57 = 0;}
  if(block.getFieldValue('e60')=='TRUE'){math_e60 = 1;}else {math_e60 = 0;}
  if(block.getFieldValue('e61')=='TRUE'){math_e61 = 1;}else {math_e61 = 0;}
  if(block.getFieldValue('e62')=='TRUE'){math_e62 = 1;}else {math_e62 = 0;}
  if(block.getFieldValue('e63')=='TRUE'){math_e63 = 1;}else {math_e63 = 0;}
  if(block.getFieldValue('e64')=='TRUE'){math_e64 = 1;}else {math_e64 = 0;}
  if(block.getFieldValue('e65')=='TRUE'){math_e65 = 1;}else {math_e65 = 0;}
  if(block.getFieldValue('e66')=='TRUE'){math_e66 = 1;}else {math_e66 = 0;}
  if(block.getFieldValue('e67')=='TRUE'){math_e67 = 1;}else {math_e67 = 0;}
  if(block.getFieldValue('e70')=='TRUE'){math_e70 = 1;}else {math_e70 = 0;}
  if(block.getFieldValue('e71')=='TRUE'){math_e71 = 1;}else {math_e71 = 0;}
  if(block.getFieldValue('e72')=='TRUE'){math_e72 = 1;}else {math_e72 = 0;}
  if(block.getFieldValue('e73')=='TRUE'){math_e73 = 1;}else {math_e73 = 0;}
  if(block.getFieldValue('e74')=='TRUE'){math_e74 = 1;}else {math_e74 = 0;}
  if(block.getFieldValue('e75')=='TRUE'){math_e75 = 1;}else {math_e75 = 0;}
  if(block.getFieldValue('e76')=='TRUE'){math_e76 = 1;}else {math_e76 = 0;}
  if(block.getFieldValue('e77')=='TRUE'){math_e77 = 1;}else {math_e77 = 0;}
  var col0 = math_e00 + (math_e10<<1) + (math_e20<<2) + (math_e30<<3) + (math_e40<<4) + (math_e50<<5) + (math_e60<<6) + (math_e70<<7);
  var col1 = (math_e01) + (math_e11<<1) + (math_e21<<2) + (math_e31<<3) + (math_e41<<4) + (math_e51<<5) + (math_e61<<6) + (math_e71<<7);
  var col2 = (math_e02) + (math_e12<<1) + (math_e22<<2) + (math_e32<<3) + (math_e42<<4) + (math_e52<<5) + (math_e62<<6) + (math_e72<<7);
  var col3 = (math_e03) + (math_e13<<1) + (math_e23<<2) + (math_e33<<3) + (math_e43<<4) + (math_e53<<5) + (math_e63<<6) + (math_e73<<7);
  var col4 = (math_e04) + (math_e14<<1) + (math_e24<<2) + (math_e34<<3) + (math_e44<<4) + (math_e54<<5) + (math_e64<<6) + (math_e74<<7);
  var col5 = (math_e05) + (math_e15<<1) + (math_e25<<2) + (math_e35<<3) + (math_e45<<4) + (math_e55<<5) + (math_e65<<6) + (math_e75<<7);
  var col6 = (math_e06) + (math_e16<<1) + (math_e26<<2) + (math_e36<<3) + (math_e46<<4) + (math_e56<<5) + (math_e66<<6) + (math_e76<<7);
  var col7 = (math_e07) + (math_e17<<1) + (math_e27<<2) + (math_e37<<3) + (math_e47<<4) + (math_e57<<5) + (math_e67<<6) + (math_e77<<7);
  /*var col0 = math_e00 + parseInt(math_e10<<1) + parseInt(math_e20<<2) + parseInt(math_e30<<3) + parseInt(math_e40<<4) + parseInt(math_e50<<5) + parseInt(math_e60<<6) + parseInt(math_e70<<7);
  var col1 = parseInt(math_e01) + parseInt(math_e11<<1) + parseInt(math_e21<<2) + parseInt(math_e31<<3) + parseInt(math_e41<<4) + parseInt(math_e51<<5) + parseInt(math_e61<<6) + parseInt(math_e71<<7);
  var col2 = parseInt(math_e02) + parseInt(math_e12<<1) + parseInt(math_e22<<2) + parseInt(math_e32<<3) + parseInt(math_e42<<4) + parseInt(math_e52<<5) + parseInt(math_e62<<6) + parseInt(math_e72<<7);
  var col3 = parseInt(math_e03) + parseInt(math_e13<<1) + parseInt(math_e23<<2) + parseInt(math_e33<<3) + parseInt(math_e43<<4) + parseInt(math_e53<<5) + parseInt(math_e63<<6) + parseInt(math_e73<<7);
  var col4 = parseInt(math_e04) + parseInt(math_e14<<1) + parseInt(math_e24<<2) + parseInt(math_e34<<3) + parseInt(math_e44<<4) + parseInt(math_e54<<5) + parseInt(math_e64<<6) + parseInt(math_e74<<7);
  var col5 = parseInt(math_e05) + parseInt(math_e15<<1) + parseInt(math_e25<<2) + parseInt(math_e35<<3) + parseInt(math_e45<<4) + parseInt(math_e55<<5) + parseInt(math_e65<<6) + parseInt(math_e75<<7);
  var col6 = parseInt(math_e06) + parseInt(math_e16<<1) + parseInt(math_e26<<2) + parseInt(math_e36<<3) + parseInt(math_e46<<4) + parseInt(math_e56<<5) + parseInt(math_e66<<6) + parseInt(math_e76<<7);
  var col7 = parseInt(math_e07) + parseInt(math_e17<<1) + parseInt(math_e27<<2) + parseInt(math_e37<<3) + parseInt(math_e47<<4) + parseInt(math_e57<<5) + parseInt(math_e67<<6) + parseInt(math_e77<<7);*/
  Blockly.Arduino.variables_[varName] = 'const char ' + varName + '[8] = {' + col0 + ',' + col1 + ',' + col2 + ',' + col3 + ',' + col4 + ',' + col5 + ',' + col6 + ',' + col7 + '};' ;
  var code = "";
  return code;
};

Blockly.Arduino['mg_button_check'] = function(block) {
  var dropdown_btn = block.getFieldValue('BTN');
  var btn=0;
  switch(dropdown_btn){
    case 'A_BTN':    btn = 128; break;
    case 'B_BTN':    btn = 64;  break;
    case 'U_BTN':    btn = 8;   break;
    case 'D_BTN':    btn = 4;   break;
    case 'L_BTN':    btn = 16;  break;
    case 'R_BTN':    btn = 32;  break;
   
  }
  var code = "btn_Check(" + btn + ")\n";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};