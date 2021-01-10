# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	config.vm.box = "Ubuntu1804"
    config.vm.box_url = "https://www.dropbox.com/s/bvz4uonf7qqdcc1/ubuntu1804lts612.box?dl=1"
    config.ssh.insert_key = false	# Avoid that vagrant removes default insecure key

	# Host manager setup
	config.hostmanager.enabled				= true
	config.hostmanager.manage_host			= true
	config.hostmanager.manage_guest			= true
	config.hostmanager.ignore_private_ip	= false
	config.hostmanager.include_offline		= true

	config.disksize.size = '20GB'

    config.vm.provider "virtualbox" do |vb|
        vb.name = "ShopFriendWebApp"
        # vb.gui = true
       vb.memory = "2048"
       vb.cpus = 2
    end

    config.vm.network "private_network", ip: "192.168.20.20"
    config.vm.hostname = 'shopfriend.test'
    config.hostmanager.aliases = %w(
        www.shopfriend.test
        assets.shopfriend.test
        images.shopfriend.test
        auth.shopfriend.test
    )

    config.vm.provision "shell", inline: <<-SHELL
        cd /vagrant
        ./vm/bootstrap.sh
        ./scripts/tools/restart.sh
    SHELL
end
