using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GTR_ASS.Data;
using GTR_ASS.Models;
using GTR_ASS.Interfaces;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace GTR_ASS.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProduct _product;

        public ProductsController(IProduct product1)
        {
            _product = product1;
        }

       
        [HttpGet]
        public IActionResult GetProducts()
        {
            if (_product.GetList() == null)
            {
                return NotFound();
            }
            var data = _product.GetList().ToList();
            return Ok(data);

        }

       
        [HttpGet("{id}")]
        public IActionResult GetProduct(Guid id)
        {
          if (_product.GetById(id) == null)
          {
              return NotFound();
          }
            var product = _product.GetById(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

       
        [HttpPost]
        public IActionResult UpdateProduct(Product product)
        {
            return Ok(_product.Update(product));
        }

      
        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            return Ok(_product.Create(product));
        }

       
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(Guid id)
        {
            return Ok(_product.Delete(id));
        }
    }
}
