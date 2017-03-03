class FacebookController < ApplicationController
  def token
    # render json: params
    token = params[:token]
    url = "https://graph.facebook.com/me"
    url += "?access_token=#{token}"
    url += "&fields=name,email"

    profile = HTTParty.get(url).parsed_response
    render json: profile
  end
end
