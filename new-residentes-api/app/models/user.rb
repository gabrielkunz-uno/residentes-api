class User < ApplicationRecord
  # acts_as_token_authenticatable
  belongs_to :resident

  enum status: {
    admin: 1,
    regular: 2
  }
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # before_save :ensure_authentication_token

end
