using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatWebsite.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Ratings",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ReviewerName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Score = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ReviewText = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DateTime = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratings", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    ID = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DisplayName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Hemi = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    UserId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    UserId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DisplayName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ServerAddress = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
<<<<<<< Updated upstream:WebApplication1/Migrations/20220614091313_Idan.cs
                    table.PrimaryKey("PK_Contacts", x => new { x.ID, x.UserId });
=======
                    table.PrimaryKey("PK_Contacts", x => new { x.Hemi, x.UserId });
>>>>>>> Stashed changes:WebApplication1/Migrations/20220614171847_Init.cs
                    table.ForeignKey(
                        name: "FK_Contacts_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
<<<<<<< Updated upstream:WebApplication1/Migrations/20220614091313_Idan.cs
                    ContactId = table.Column<string>(type: "varchar(255)", nullable: false)
=======
                    ConId = table.Column<string>(type: "varchar(255)", nullable: false)
>>>>>>> Stashed changes:WebApplication1/Migrations/20220614171847_Init.cs
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Text = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    UserSent = table.Column<bool>(type: "tinyint(1)", nullable: false),
<<<<<<< Updated upstream:WebApplication1/Migrations/20220614091313_Idan.cs
                    Time = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => new { x.ID, x.UserId, x.ContactId });
                    table.ForeignKey(
                        name: "FK_Messages_Contacts_ContactId",
                        column: x =>  x.ContactId ,
                        principalTable: "Contacts",
                        principalColumn:  "ID",
                        onDelete: ReferentialAction.Cascade);
=======
                    Time = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    ContactHemi = table.Column<string>(type: "varchar(255)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ContactUserId = table.Column<string>(type: "varchar(255)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => new { x.ID, x.UserId, x.ConId });
                    table.ForeignKey(
                        name: "FK_Messages_Contacts_ContactHemi_ContactUserId",
                        columns: x => new { x.ContactHemi, x.ContactUserId },
                        principalTable: "Contacts",
                        principalColumns: new[] { "Hemi", "UserId" });
>>>>>>> Stashed changes:WebApplication1/Migrations/20220614171847_Init.cs
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_UserId",
                table: "Contacts",
                column: "UserId");

            migrationBuilder.CreateIndex(
<<<<<<< Updated upstream:WebApplication1/Migrations/20220614091313_Idan.cs
                name: "IX_Messages_ContactId",
                table: "Messages",
                column:  "ContactId");
=======
                name: "IX_Messages_ContactHemi_ContactUserId",
                table: "Messages",
                columns: new[] { "ContactHemi", "ContactUserId" });
>>>>>>> Stashed changes:WebApplication1/Migrations/20220614171847_Init.cs
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DropTable(
                name: "Ratings");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
