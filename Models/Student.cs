using System.ComponentModel.DataAnnotations;

public class Student{
    [Key]public int StudentID { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}