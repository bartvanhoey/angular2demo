export interface IEmployee {
  code: string,
  name: string,
  gender: string,
  dateOfBirth: string
  annualSalary: number
  department?: string

  computeMonthlySalary(annualSalary: number): number;
}

class Employee implements IEmployee {
  constructor(public annualSalary: number, public code: string, public dateOfBirth: string, public gender: string, public name: string) {

  }

  computeMonthlySalary(annualSalary: number): number {
    return annualSalary / 12;
  }
}


