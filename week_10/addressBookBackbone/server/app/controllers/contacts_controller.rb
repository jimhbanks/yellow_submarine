class ContactsController < ApplicationController

  def index
    contacts = Contact.all.order('name ASC')

    render json: contacts
  end

  def create
    contact = Contact.create(name: params[name:], number: params[number:])
    
    render json: contact if contact.save
  end

  def update
    contact = Contact.find(params[:id])

    render json: contact if contact.update_attributes(name: params[name:], number: params[number:])
  end

  def destroy
    contact = Contact.find(params[:id])

    render json: contact if contact.destroy
  end

end

