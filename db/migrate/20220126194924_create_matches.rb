class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.belongs_to :player1, null: false, foreign_key: { to_table: "users"}
      t.belongs_to :player2, null: false, foreign_key: { to_table: "users"}
      t.boolean :completed, default: false
      t.timestamps

    end
  end
end
