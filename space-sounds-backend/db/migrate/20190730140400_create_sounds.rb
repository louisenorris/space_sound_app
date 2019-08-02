class CreateSounds < ActiveRecord::Migration[5.2]
  def change
    create_table :sounds do |t|
      t.string :title
      t.string :audio
      t.string :description

      t.timestamps
    end
  end
end
