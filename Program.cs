using student_monitoring_dashboard.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<DashContext>(options => 

//options.UseSqlServer(builder.Configuration.GetConnectionString("SQLSERVERCONNECTIONRiciano")));

//options.UseSqlServer(builder.Configuration.GetConnectionString("SQLSERVERCONNECTIONRiciano")));
options.UseSqlServer(builder.Configuration.GetConnectionString("SQLSERVERCONNECTIONMarta")));
//options.UseSqlServer(builder.Configuration.GetConnectionString("SQLSERVERCONNECTIONDavidHome")));

//options.UseSqlServer(builder.Configuration.GetConnectionString("SQLSERVERCONNECTIONDavid")));
builder.Services.AddCors(options => options.AddPolicy(name: "DashOrigins",
policy => {
    policy.WithOrigins("http://localhost:4200/").AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
}));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("DashOrigins");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();
