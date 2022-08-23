class CreateReports < ActiveRecord::Migration[6.1]
  def change
    create_table :reports do |t|
      t.references :resident, null: false, foreign_key: true
      t.text :content, null: false

      t.timestamps
    end
  end
end
