using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Feedback
{
    [Key] public int FeedbackID { get; set; }
    public string TypeOfFeedback { get; set; }
    public string ReadInscructions { get; set; }
    public string HandedIn { get; set; }
    public string FinishedFeedback { get; set; }
    public int TimeSpent { get; set; }
    public int TotalReviewComments { get; set; }
    public string ReadFeedback { get; set; }
    [ForeignKey("Student")]public int StudentID { get; set;}
    [ForeignKey("Assignment")]public int AssignmentID { get; set; }

}
