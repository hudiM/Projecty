using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Projecty.Migrations
{
    public partial class AddedStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Features");

            migrationBuilder.AddColumn<int>(
                name: "StatusId",
                table: "Tasks",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StatusId",
                table: "Features",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Statuses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Statuses", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_StatusId",
                table: "Tasks",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Features_StatusId",
                table: "Features",
                column: "StatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Features_Statuses_StatusId",
                table: "Features",
                column: "StatusId",
                principalTable: "Statuses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Statuses_StatusId",
                table: "Tasks",
                column: "StatusId",
                principalTable: "Statuses",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Features_Statuses_StatusId",
                table: "Features");

            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Statuses_StatusId",
                table: "Tasks");

            migrationBuilder.DropTable(
                name: "Statuses");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_StatusId",
                table: "Tasks");

            migrationBuilder.DropIndex(
                name: "IX_Features_StatusId",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "StatusId",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "StatusId",
                table: "Features");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Tasks",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Features",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
