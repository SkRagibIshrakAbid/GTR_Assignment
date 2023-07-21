using System.ComponentModel.DataAnnotations;

namespace GTR_ASS.Models
{
    public class Product
    {
        [Key]
        public Guid ProductId { get; set; } //Why did I use GUID?

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        public decimal Price { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        [Required]
        public int QuantityInStock { get; set; }
    }
}
