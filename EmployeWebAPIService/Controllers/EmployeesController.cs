using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace EmployeWebAPIService.Controllers
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeContext _employeeContext;

        public EmployeesController(EmployeeContext employeeContext)
        {
            _employeeContext = employeeContext;
        }

        [HttpGet]
        public  IActionResult GetEmployees()
        {
           return Ok(_employeeContext.Employees.ToList());
        }
        
        [HttpGet("{code}")]
        public  IActionResult GetEmployee(string code)
        {
            return Ok(_employeeContext.Employees.Where(x => x.Code == code).ToList());
        }
        
    }
}

