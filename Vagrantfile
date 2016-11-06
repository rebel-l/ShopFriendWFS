# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	# Setup for all machines
	config.vm.provision "shell", inline: "echo Starting Vagrant ..."
	config.vm.box = "Ubuntu14.04LTS"
	config.vm.box_url = "https://www.dropbox.com/s/gzbxpgjih67uu2t/ubuntu1404lts5018.box?dl=1"
	config.ssh.insert_key = false	# Avoid that vagrant removes default insecure key

	# Host manager setup
	config.hostmanager.enabled				= true
	config.hostmanager.manage_host			= true
	config.hostmanager.manage_guest			= true
	config.hostmanager.ignore_private_ip	= false
	config.hostmanager.include_offline		= true
	
	config.vm.define "ShopFriendWFS", autostart: true do |shopfriend|
        # Setup network
        shopfriend.vm.network "private_network", ip: "192.168.20.20"
        shopfriend.vm.hostname = 'shopfriend.dev'

        shopfriend.vm.provider "virtualbox" do |vb|
            vb.name = "ShopFriendWFS"
        end

        # Chef Configuration
        shopfriend.vm.provision "chef_solo" do |chef|
            chef.cookbooks_path = "./node_modules/rebel-l-sisa/cookbooks"
            chef.roles_path = "./node_modules/rebel-l-sisa/roles"
            chef.environments_path = "./node_modules/rebel-l-sisa/environments"
            chef.data_bags_path = "./node_modules/rebel-l-sisa/data_bags"
            chef.add_role "Default"
            chef.environment = "development"
            chef.add_recipe "NodeJs"

            chef.json = {
                'Iptables' => {
                    'Whitelist'	=> {
                        'Ports' => [80]
                    }
                },
                'NodeJs' => {
                    'version' => '6.9.1'
                }
            }
        end
    end
end