using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace clientapp.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult AccessDenied()
        {
            return View();
        }
    }
}