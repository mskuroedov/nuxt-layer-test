import {MaskOptions} from "maska";

interface FormInput {
  maskOptions: MaskOptions
  // validate: () => boolean
}

export class CtcInput implements FormInput {

  constructor() {

  }

  get maskOptions() {
    return {
      mask: "##AA######",
      tokens: {
        A: {
          pattern: /[0-9a-zA-Zа-яА-я]/,
          transform: (v: string) => v.toLocaleUpperCase()
        }
      }
    }
  }
}

export class VuInput implements FormInput {

  constructor() {

  }

  get maskOptions() {
    return {
      mask: "##AA######",
      tokens: {
        A: {
          pattern: /[0-9a-zA-Zа-яА-я]/,
          transform: (v: string) => v.toLocaleUpperCase()
        }
      }
    }
  }
}

export class UinInput implements FormInput {

  constructor() {

  }

  get maskOptions() {
    return {
      mask: "#########################"
    }
  }
}

export class GrzInput implements FormInput {

  constructor() {

  }

  get maskOptions() {
    return {
      mask: "##AA######",
      tokens: {
        A: {
          pattern: /[0-9a-zA-Zа-яА-я]/,
          transform: (v: string) => v.toLocaleUpperCase()
        }
      }
    }
  }
}
