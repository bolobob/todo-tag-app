class Task < ApplicationRecord
  has_many :labellings, dependent: :destroy
  has_many :labels, through: :labellings
end
