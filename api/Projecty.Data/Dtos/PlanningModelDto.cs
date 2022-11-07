namespace Projecty.Data.Models
{
    public class PlanningModelDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int? StatusId { get; set; }
        public Status Status { get; set; }
    }
}
