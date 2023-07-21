using GTR.Ass.MVC.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GTR.Ass.MVC.Controllers
{
    public class ProductController : Controller
    {
        private readonly HttpClient _client;
        private const string BaseUrl = "https://localhost:7474/api/";
        public ProductController(HttpClient client)
        {
                _client = client;
                _client.BaseAddress = new Uri(BaseUrl);
        }
        public async Task<IActionResult> Index()
        {
            var response = await _client.GetAsync("Products/GetProducts");
            if (response.IsSuccessStatusCode)
            {
                var products = await response.Content.ReadFromJsonAsync<List<Product>>();
                return View(products);
            }
            else
            {
                return View(new List<Product>());
            }
        }

        
        public ActionResult Details(Guid id)
        {
            var response = _client.GetAsync($"Products/GetProduct/{id}").Result;
            if (response.IsSuccessStatusCode)
            {
                var ressult = response.Content.ReadAsStringAsync().Result;
                var product = JsonConvert.DeserializeObject<Product>(ressult);
                return View(product);
            }
            else
            {
                return View("Error");
            }
        }

      
        public ActionResult Create()
        {
            return View();
        }

      
        [HttpPost]
        public async Task<IActionResult> Create(Product product)
        {
            var response = await _client.PostAsJsonAsync("Products/CraeteProduct", product);
            if (response.IsSuccessStatusCode)
            {
                var ressult =  response.Content.ReadAsStringAsync().Result;
                return RedirectToAction("Index", "Product");
            }
            else
            {
                return View("Error");
            }
        }

        
        public async Task<ActionResult> Edit(Guid id)
        {
            var response =  _client.GetAsync($"Products/GetProduct/{id}").Result;
            if (response.IsSuccessStatusCode)
            {
                var ressult = response.Content.ReadAsStringAsync().Result;
                var product = JsonConvert.DeserializeObject<Product>(ressult);  
                return View(product);
            }
            else
            {
                return View("Error");
            }
        }

  
        [HttpPost]
        public async Task<ActionResult> Edit(Product product)
        {
            var response = await _client.PostAsJsonAsync("Products/UpdateProduct", product);
            if (response.IsSuccessStatusCode)
            {
                var ressult = response.Content.ReadAsStringAsync().Result;
                return RedirectToAction("Index", "Product");
            }
            else
            {
                return View("Error");
            }
        }

        [HttpGet]
        public ActionResult Delete(Guid id)
        {
            var response = _client.GetAsync($"Products/GetProduct/{id}").Result;
            if (response.IsSuccessStatusCode)
            {
                var ressult = response.Content.ReadAsStringAsync().Result;
                var product = JsonConvert.DeserializeObject<Product>(ressult);
                return View(product);
            }
            else
            {
                return View("Error");
            }
        }

        
        [HttpPost]
        public ActionResult ConfrimDelete(Guid id)
        {
            var response = _client.DeleteAsync($"Products/DeleteProduct/{id}").Result;
            if (response.IsSuccessStatusCode)
            {
                var ressult = response.Content.ReadAsStringAsync().Result;
                return RedirectToAction("Index", "Product");
            }
            else
            {
                return View("Error");
            }
        }
    }
}
