# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, :type => :model do
  let(:user) { create :user }

  describe 'attributes' do
    it { is_expected.not_to allow_value(nil).for(:uuid) }
    it { is_expected.not_to allow_value('').for(:uuid) }
    it { is_expected.not_to allow_value('foobar').for(:uuid) }

    it { is_expected.not_to allow_value(nil).for(:username) }
    it { is_expected.not_to allow_value('').for(:username) }
    it { is_expected.not_to allow_value('f').for(:username) }
    it { is_expected.not_to allow_value('fffffffffffffffffffff').for(:username) }

    it { is_expected.not_to allow_value(nil).for(:age) }
    it { is_expected.not_to allow_value('').for(:age) }
    it { is_expected.not_to allow_value(16).for(:age) }
    it { is_expected.not_to allow_value(100).for(:age) }
  end
end
