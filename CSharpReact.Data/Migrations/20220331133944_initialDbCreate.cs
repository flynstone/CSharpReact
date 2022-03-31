using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CSharpReact.Data.Migrations
{
    public partial class initialDbCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Body = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articles", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Articles",
                columns: new[] { "Id", "Body", "DateCreated", "Title" },
                values: new object[,]
                {
                    { new Guid("b8358ff4-12ff-4b21-9128-27f11d278fb7"), "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", new DateTime(2022, 3, 31, 9, 39, 43, 907, DateTimeKind.Local).AddTicks(985), "What is Lorem Ipsum?" },
                    { new Guid("8ec89d2d-80dd-4987-9c69-aa9e046d0cc3"), "Contrary to popular belief, Lorem Ipsum is not simply random text.", new DateTime(2022, 3, 31, 9, 39, 43, 908, DateTimeKind.Local).AddTicks(5411), "Where does it come from?" },
                    { new Guid("35e0d22f-2476-4336-8db7-9e082b785144"), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", new DateTime(2022, 3, 31, 9, 39, 43, 908, DateTimeKind.Local).AddTicks(5430), "Why do we use it?" },
                    { new Guid("3e9cb0cb-f54c-4d05-b4be-eb0d7c0e2777"), "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.", new DateTime(2022, 3, 31, 9, 39, 43, 908, DateTimeKind.Local).AddTicks(5433), "Where can I get some?" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Articles");
        }
    }
}
