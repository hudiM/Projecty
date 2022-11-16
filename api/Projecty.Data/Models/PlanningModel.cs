namespace Projecty.Data.Models
{
    public class PlanningModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public virtual int StatusId { get; set; }
        public Status Status { get; set; }
    }
}
