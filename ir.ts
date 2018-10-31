

/**
 * IR remote
 */
//% icon="\uf1eb" weight=5 color=#fc5a5a
namespace IR {

  /**
  * initialization
  */
  //% blockId=ir_init
  //% blockGap=20 weight=90
  //% block="connect ir receiver to %pin"
  //% shim=IR::init
  export function init(pin: Pins): void {
    return
  }

  /**
  * button pushed.
  */
  //% blockId=ir_received_event
  //% blockGap=20 weight=70
  //% block="on |%btn| button pressed"
  //% shim=IR::onPressEvent
  export function onPressEvent(btn: RemoteButton, body:Action): void {
    return
  }


}
