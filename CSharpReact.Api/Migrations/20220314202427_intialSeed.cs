using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CSharpReact.Api.Migrations
{
    public partial class intialSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Articles",
                columns: new[] { "Id", "Body", "DateCreated", "Title" },
                values: new object[,]
                {
                    { new Guid("3d6c22be-beac-4a39-bd20-7deca131f1e3"), "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", new DateTime(2022, 3, 14, 16, 24, 26, 891, DateTimeKind.Local).AddTicks(9289), "What is Lorem Ipsum?" },
                    { new Guid("2a238500-54d3-447c-a8f5-73ccd6c7a3aa"), "Contrary to popular belief, Lorem Ipsum is not simply random text.", new DateTime(2022, 3, 14, 16, 24, 26, 893, DateTimeKind.Local).AddTicks(2925), "Where does it come from?" },
                    { new Guid("d3fa7fa7-32c8-4c8f-861a-da3c8b29fd1d"), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", new DateTime(2022, 3, 14, 16, 24, 26, 893, DateTimeKind.Local).AddTicks(2942), "Why do we use it?" },
                    { new Guid("b2c3c8ac-74ea-42ca-80ce-d9c483b846f2"), "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.", new DateTime(2022, 3, 14, 16, 24, 26, 893, DateTimeKind.Local).AddTicks(2946), "Where can I get some?" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Articles",
                keyColumn: "Id",
                keyValue: new Guid("2a238500-54d3-447c-a8f5-73ccd6c7a3aa"));

            migrationBuilder.DeleteData(
                table: "Articles",
                keyColumn: "Id",
                keyValue: new Guid("3d6c22be-beac-4a39-bd20-7deca131f1e3"));

            migrationBuilder.DeleteData(
                table: "Articles",
                keyColumn: "Id",
                keyValue: new Guid("b2c3c8ac-74ea-42ca-80ce-d9c483b846f2"));

            migrationBuilder.DeleteData(
                table: "Articles",
                keyColumn: "Id",
                keyValue: new Guid("d3fa7fa7-32c8-4c8f-861a-da3c8b29fd1d"));
        }
    }
}
