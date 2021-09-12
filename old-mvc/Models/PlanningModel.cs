using System;
using System.ComponentModel.DataAnnotations.Schema;

using Projecty.Enums;

namespace Projecty.Models
{
    public class PlanningModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public Status Status { get; set; }

        [NotMapped]
        public string StatusAsString => Status.ToString();

        [NotMapped]
        public string StatusAsHtmlColor => ConvertStatus();

        private string ConvertStatus()
        {
            string result = "secondary";

            switch (Status)
            {
                case Status.New:
                    result = "secondary";
                    break;
                case Status.Pending:
                    result = "warning";
                    break;
                case Status.InProgress:
                    result = "info";
                    break;
                case Status.WaitingForReview:
                    result = "purple";
                    break;
                case Status.UnderReview:
                    result = "pink";
                    break;
                case Status.Halted:
                    result = "danger";
                    break;
                case Status.Completed:
                    result = "success";
                    break;
                default:
                    break;
            }

            return result;
        }
    }
}
