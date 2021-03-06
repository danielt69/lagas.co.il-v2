# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "paypal-sdk-core"
  s.version = "0.2.10"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["PayPal"]
  s.date = "2014-06-25"
  s.description = "Core library for PayPal ruby SDKs"
  s.email = ["DL-PP-Platform-Ruby-SDK@ebay.com"]
  s.homepage = "https://developer.paypal.com"
  s.licenses = ["PayPal SDK License"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.24"
  s.summary = "Core library for PayPal ruby SDKs"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<xml-simple>, [">= 0"])
      s.add_runtime_dependency(%q<multi_json>, ["~> 1.0"])
    else
      s.add_dependency(%q<xml-simple>, [">= 0"])
      s.add_dependency(%q<multi_json>, ["~> 1.0"])
    end
  else
    s.add_dependency(%q<xml-simple>, [">= 0"])
    s.add_dependency(%q<multi_json>, ["~> 1.0"])
  end
end
