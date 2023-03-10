using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class MediaSite
{
    [Key]public int MSID { get; set; }
    public string Username { get; set; }
    public int LiveViews { get; set; }
    public int OnDemandViews { get; set; }
    public int TotalViews { get; set; }
    public int PresentationsWatched { get; set; }
    public DateTime TotalTimeWatched { get; set; }
    public DateTime FirstWatched { get; set; }
    public DateTime LastWatched { get; set; }
    [ForeignKey("Student")]public int StudentID { get; set; }
}