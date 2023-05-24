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
                label= "First Name",
                type = "text",
                value = "",
                placeholder = "Enter your first namespace"
            };
            var fieldItem2 = new {
                label= "First Name",
                type = "text",
                value = "",
                placeholder = "Enter your first namespace"
            };
            var fields = new [] { new { fieldItems = new [] {
                fieldItem1,
                fieldItem2
            } } }; 
            // [0].fieldItems[0].label
            
             
            return Ok(fields);         
        }
    }
}
