using System;
using System.ComponentModel.DataAnnotations.Schema;

using Projecty.Enums;

namespace Projecty.Models
{
    public class Task : PlanningModel
    {
        public Priority Priority { get; set; }

        [NotMapped]
        public string PriorityAsHtmlColor => ConvertPriority();

        [NotMapped]
        public string PriorityAsString => Priority.ToString();

        private string ConvertPriority()
        {
            string result = "secondary";

            switch (Priority)
            {
                case Priority.High:
                    result = "danger";
                    break;
                case Priority.Medium:
                    result = "warning";
                    break;
                case Priority.Low:
                    result = "success";
                    break;
                default:
                    break;
            }

            return result;
        }
    }
}
