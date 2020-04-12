#!/bin/bash

PROJECT_ROOT=/vagrant
VM_PATH=$PROJECT_ROOT/vm
HOME_PATH=/home/vagrant
USER=vagrant

# update machine
echo "UPDATE MACHINE"
sudo apt-get update
sudo apt-get -y upgrade

# setup home directory
cp $VM_PATH/$HOME_PATH/.bashrc $HOME_PATH/
chown $USER:$USER $HOME_PATH/.bashrc
cp $VM_PATH/$HOME_PATH/.profile $HOME_PATH/
chown $USER:$USER $HOME_PATH/.profile

# install docker
echo "INSTALL DOCKER"
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get -y install docker-ce docker-ce-cli containerd.io

# install nginx
echo "INSTALL NGINX"
sudo apt-get -y install nginx

#        sudo cp /vagrant/etc/nginx/proxy/ssl/certs/* /etc/ssl/certs/
#        sudo cp /vagrant/etc/nginx/proxy/ssl/private/* /etc/ssl/private/
#        sudo cp /vagrant/etc/nginx/proxy/dhparam.pem /etc/nginx/
#        sudo cp /vagrant/etc/nginx/proxy/snippets/* /etc/nginx/snippets/
#        sudo cp /vagrant/etc/nginx/proxy/default /etc/nginx/sites-available/
#        sudo mkdir -p /var/www/proxy
#        sudo cp /vagrant/etc/nginx/proxy/html/* /var/www/proxy/

sudo systemctl reload nginx
