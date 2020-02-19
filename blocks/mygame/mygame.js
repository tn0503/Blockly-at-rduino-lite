/**
 * @license
 * Visual Blocks Editor
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

'use strict';

goog.provide('Blockly.Blocks.mygame');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//Blockly.Msg.IR_HELPURL = 'http://greich.fr/v1/blog/post.php?id=13';

Blockly.Blocks['mg_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ゲーム初期化");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("画面幅");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour("#4040ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_height'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("画面高さ");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour("#4040ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_clear_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("画面クリア");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_flash'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("画面書き換え");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_update'] = {
    init: function() {
    this.appendDummyInput()
          .appendField("フレームアップデート");
    this.appendDummyInput()
          .appendField(new Blockly.FieldNumber("50"), "INTERVAL");
    this.appendDummyInput()
          .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
    }
  };

Blockly.Blocks['mg_draw_pixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("点を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("直線を描画");
    this.appendValueInput("X0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X0");
    this.appendValueInput("Y0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y0");
    this.appendValueInput("X1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X1");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y1");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_fast_vline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("縦線を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("H")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("長さ");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_fast_hline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("横線を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("W")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("長さ");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("長方形を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("W")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("幅");
    this.appendValueInput("H")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("高さ");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_fill_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("長方形を塗りつぶし");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("W")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("幅");
    this.appendValueInput("H")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("高さ");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("円を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("半径");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_fill_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("円を塗りつぶし");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("半径");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_round_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("角丸長方形を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("W")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("幅");
    this.appendValueInput("H")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("高さ");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("半径");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_fill_round_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("角丸長方形を塗りつぶし");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("W")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("幅");
    this.appendValueInput("H")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("高さ");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("半径");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_ellipse'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("楕円を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("半径");
    this.appendValueInput("A")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X軸");
    this.appendValueInput("B")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y軸");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_fill_ellipse'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("楕円を塗りつぶし");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("X");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Y");
      this.appendValueInput("R")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("半径");
      this.appendValueInput("A")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("X軸");
      this.appendValueInput("B")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Y軸");
      this.appendValueInput("W/B")
          .setCheck("Boolean")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("W/B");
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour("#0000ff");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

Blockly.Blocks['mg_draw_bitmap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("画像を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("W")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x幅");
    this.appendValueInput("H")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x高さ");
    this.appendValueInput("BMP")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("画像");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_create_bitmap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("画像作成")
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e00")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e05")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e07");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e15")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e17");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e21")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e22")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e23")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e24")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e25")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e26")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e27");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e30")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e31")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e32")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e33")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e34")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e35")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e36")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e37");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e40")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e41")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e42")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e43")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e44")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e45")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e46")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e47");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e50")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e51")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e52")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e53")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e54")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e55")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e56")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e57");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e60")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e61")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e62")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e63")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e64")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e65")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e66")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e67");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e70")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e71")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e72")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e73")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e74")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e75")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e76")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "e77");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_string'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("文字列を描画");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("X");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Y");
      this.appendValueInput("C")
          //.setCheck("Text")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("文字列");
      this.appendValueInput("S")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("サイズ");
      this.appendValueInput("W/B")
          .setCheck("Boolean")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("W/B");
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour("#0000ff");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

Blockly.Blocks['mg_draw_char'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("文字を描画");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("C")
        //.setCheck("Text")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("文字");
    this.appendValueInput("S")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("サイズ");
    this.appendValueInput("W/B")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("W/B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#0000ff");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mg_draw_num'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("数値を描画");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("X");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Y");
      this.appendValueInput("C")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("数値");
      this.appendValueInput("S")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("サイズ");
      this.appendValueInput("W/B")
          .setCheck("Boolean")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("W/B");
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour("#0000ff");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

Blockly.Blocks['mg_button_check'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ボタン")
          .appendField(new Blockly.FieldDropdown([["A", "A_BTN"], ["B", "B_BTN"], ["U", "U_BTN"], ["D", "D_BTN"], ["L", "L_BTN"], ["R", "R_BTN"]]), "BTN")
          .appendField("が押されている");
      this.setInputsInline(false);
      this.setOutput(true, "Boolean");
      this.setColour("#0000ff");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };