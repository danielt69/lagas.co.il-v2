# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'
Spree.config do |config|
  # Example:
  # Uncomment to override the default site name.
  #config.site_name = "user@example.com's Shop"
  #config.site_url = "10.104.214.119"
  config.allow_ssl_in_production = false

  #main settings
	#config.address_requires_state = true # should state/state_name be required
	config.admin_interface_logo = 'logo/pikkonet_logo.png'
	#config.admin_products_per_page = 10
	#config.allow_backorder_shipping = false # should only be true if you don't need to track inventory
	#config.allow_checkout_on_gateway_error = false
	#config.allow_guest_checkout = true
	#config.allow_ssl_in_development_and_test = false
	#config.allow_ssl_in_production = true
	#config.allow_ssl_in_staging = true
	#config.alternative_billing_phone = false # Request extra phone for bill addr
	#config.alternative_shipping_phone = false # Request extra phone for ship addr
	#config.always_include_confirm_step = false # Ensures confirmation step is always in checkout_progress bar, but does not force a confirm step if your payment methods do not support it.
	#config.always_put_site_name_in_title = true
	#config.auto_capture = false # automatically capture the credit card (as opposed to just authorize and capture later)
	#config.binary_inventory_cache = false # only invalidate product cache when a stock item changes whether it is in_stock
	#config.check_for_spree_alerts = true
	#config.checkout_zone = nil # replace with the name of a zone if you would like to limit the countries
	#config.company = false # Request company field for billing and shipping addr
	#config.currency = "USD"
	#config.currency_decimal_mark = "."
	#config.currency_symbol_position = "before"
	#config.currency_sign_before_symbol = true
	#config.currency_thousands_separator = ","
	#config.display_currency = false
	#config.default_country_id, :integer
	#config.default_meta_description = 'Spree demo site'
	#config.default_meta_keywords = 'spree, demo'
	#config.default_seo_title = ''
	#config.dismissed_spree_alerts = ''
	#config.hide_cents = false
	#config.last_check_for_spree_alerts = nil
	#config.layout = 'spree/layouts/spree_application'
	#config.logo = 'logo/lagas_logo.png'
	#config.max_level_in_taxons_menu = 1 # maximum nesting level in taxons menu
	#config.orders_per_page = 15
	#config.prices_inc_tax = false
	#config.products_per_page = 12
	#config.promotions_per_page = 15
	#config.redirect_https_to_http = false
	#config.require_master_price = true
	#config.shipment_inc_vat = false
	#config.shipping_instructions = false # Request instructions/info for shipping
	#config.show_only_complete_orders_by_default = true
	#config.show_variant_full_price = false #Displays variant full price or difference with product price. Default false to be compatible with older behavior
	#config.show_products_without_price = false
	#config.show_raw_product_description = false
	#config.site_name = 'Spree Demo Site'
	#config.site_url = 'demo.spreecommerce.com'
	#config.tax_using_ship_address = true
	#config.track_inventory_levels = true # Determines whether to track on_hand values for variants / products.

# Default mail headers settings
	#config.enable_mail_delivery = false
	#config.send_core_emails = true
	#config.mails_from = 'spree@example.com'
	#config.mail_bcc = 'spree@example.com'
	#config.intercept_email = nil

# Default smtp settings
	#config.override_actionmailer_config = true
	#config.mail_host = 'localhost'
	#config.mail_domain = 'localhost'
	#config.mail_port = 25
	#config.secure_connection_type = Core::MailSettings::SECURE_CONNECTION_TYPES[0]
	#config.mail_auth_type = Core::MailSettings::MAIL_AUTH[0]
	#config.smtp_username, :string
	#config.smtp_password, :string

end

Spree.user_class = "Spree::User"
