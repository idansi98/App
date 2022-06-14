using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatWebsite.Migrations
{
    public partial class Init1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Users_UserId",
                table: "Contacts");

            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Contacts_ContactHemi_ContactUserId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Messages_ContactHemi_ContactUserId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_UserId",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "ContactHemi",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "ContactUserId",
                table: "Messages");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Users",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Messages",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ConId",
                table: "Messages",
                newName: "ContactId");

            migrationBuilder.RenameColumn(
                name: "Hemi",
                table: "Contacts",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Users",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Messages",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ContactId",
                table: "Messages",
                newName: "ConId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Contacts",
                newName: "Hemi");

            migrationBuilder.AddColumn<string>(
                name: "ContactHemi",
                table: "Messages",
                type: "varchar(255)",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ContactUserId",
                table: "Messages",
                type: "varchar(255)",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_ContactHemi_ContactUserId",
                table: "Messages",
                columns: new[] { "ContactHemi", "ContactUserId" });

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_UserId",
                table: "Contacts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Users_UserId",
                table: "Contacts",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Contacts_ContactHemi_ContactUserId",
                table: "Messages",
                columns: new[] { "ContactHemi", "ContactUserId" },
                principalTable: "Contacts",
                principalColumns: new[] { "Hemi", "UserId" });
        }
    }
}
