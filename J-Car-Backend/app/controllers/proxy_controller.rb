class ProxyController < ApplicationController
  def api_call
    response = RestClient.get(`http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=#{make}+#{model}`)
    render xml: response
    redirect_to 'http://localhost:3001'
  end

  def create
    @car = Car.create(
        make: params[:make],
        model: params[:model]
      )
        render xml: @car
  end

end
