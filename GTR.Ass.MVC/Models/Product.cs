namespace GTR.Ass.MVC.Models
{
    public class Product
    {       
        public Guid ProductId { get; set; }       
        public string Name { get; set; }      
        public decimal Price { get; set; }      
        public string? Description { get; set; }       
        public int QuantityInStock { get; set; }
    }
}
