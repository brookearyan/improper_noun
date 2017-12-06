class CreateHaikus < ActiveRecord::Migration[5.1]
  def change
    create_table :haikus do |t|
      t.string :alias
      t.string :noun_one
      t.string :noun_two
      t.string :noun_three
      t.string :noun_four
      t.string :noun_five
    end
  end
end
