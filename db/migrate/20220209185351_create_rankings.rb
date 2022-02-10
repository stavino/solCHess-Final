class CreateRankings < ActiveRecord::Migration[7.0]
  def change
    create_table :rankings do |t|
      t.integer :points
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
