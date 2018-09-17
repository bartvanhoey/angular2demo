using System.ComponentModel.DataAnnotations;

namespace EmployeWebAPIService
{
    public class Employee
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string DateOfBirth { get; set; }
        public decimal AnnualSalary { get; set; }
    }
}