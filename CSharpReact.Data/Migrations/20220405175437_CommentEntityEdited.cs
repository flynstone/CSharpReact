using Microsoft.EntityFrameworkCore.Migrations;

namespace CSharpReact.Data.Migrations
{
    public partial class CommentEntityEdited : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Body",
                table: "Comments",
                newName: "Message");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Message",
                table: "Comments",
                newName: "Body");
        }
    }
}
