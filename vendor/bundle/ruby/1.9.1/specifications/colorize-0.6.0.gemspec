# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "colorize"
  s.version = "0.6.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["fazibear"]
  s.date = "2012-09-15"
  s.description = "Ruby String class extension. Adds methods to set text color, background color and, text effects on ruby console and command line output, using ANSI escape sequences."
  s.email = "fazibear@gmail.com"
  s.extra_rdoc_files = ["README.rdoc"]
  s.files = ["README.rdoc"]
  s.homepage = "http://github.com/fazibear/colorize"
  s.licenses = ["GPL"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.24"
  s.summary = "Add color methods to String class"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
