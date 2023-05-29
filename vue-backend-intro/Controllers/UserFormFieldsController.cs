using Microsoft.AspNetCore.Mvc;

namespace vue_backend_intro.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserFormFieldsController : ControllerBase
    {
        private readonly ILogger<UserFormFieldsController> _logger;

        public UserFormFieldsController(ILogger<UserFormFieldsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var fieldItem1 = new {
                label = "First Name",
                type = "text",
                value = "",
                placeholder = "Enter your first name"
            };
            var fieldItem2 = new {
                label = "Last Name",
                type = "text",
                value = "",
                placeholder = "Enter your last name"
            };
            var fieldItem3 = new {
                label = "Email",
                type = "text",
                value = "",
                placeholder = "Enter your email"
            };
            var button = new {
                value = "New User",
                type = "submit",
                action = ""
            };
            var fields = 
            new [] 
            { 
                new { 
                        fieldItems = new [] 
                        {
                            fieldItem1,
                            fieldItem2,
                            fieldItem3
                        },
                        buttonItem = button 
                } 
            }; 
            return Ok(fields);         
        }
    }
}
