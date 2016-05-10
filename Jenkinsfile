docker.image("node").inside {
    
    /* 
     * - set the HOME so that npm doesn't try to write to root... which is a bit odd of the image.
     */

    try {
    stage "Checkout and build"
        checkout scm
	sh "HOME=. && npm install"

    stage "Test and validate"	
        sh "HOME=. && npm run gulp"
    } catch(err) {
        currentBuild.result = "FAILURE"
    } finally {
        sendhipchat()
    }

}

def sendhipchat() {
    res = currentBuild.result
    if(currentBuild.result == null) {
      res = "SUCCESS"
    }
    message = "${env.JOB_NAME} #${env.BUILD_NUMBER}, status: ${res} (<a href='${currentBuild.absoluteUrl}'>Open</a>)"
    color = null
    if(currentBuild.result == "UNSTABLE") {
        color = "YELLOW"
    } else if(currentBuild.result == "SUCCESS" || currentBuild.result == null){
        color = "GREEN"
    } else if(currentBuild.result == "FAILURE") {
        color = "RED"
    }
    if(color != null) {
        hipchatSend message: message, color: color
    }
}

