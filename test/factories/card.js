export const cardMock = (options = {}) => {
  const card = {
    redirect_url: '/example',
    offer_image: 'test_image',
    bottom_line: 'test_bottom_line',
    offer_name: 'test_offer_name',
    star_rating: 2.5,
    review_url: 'https://test-review.me',
    rewards_program: 'test_rewards_program',
    annual_fee: '2000',
    intro_purchase_apr: '20%',
    intro_transfer_apr: '20%',
    regular_apr: '20%',
    marketing_bullets: '<ul><li>test_marketing_bullets</li></ul>',
    credit_rating: 'goodexcellent'
  }
  return { ...card, ...options }
}
